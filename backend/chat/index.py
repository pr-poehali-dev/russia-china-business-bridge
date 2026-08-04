import json
import os
import psycopg2


def cors_headers() -> dict:
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, X-Admin-Password',
        'Access-Control-Max-Age': '86400',
        'Content-Type': 'application/json',
    }


def resolve_client(cur, event):
    '''Определяет, кто обращается: клиент (по токену) или админ (по паролю).
    Возвращает (role, client_id) или (None, None).'''
    headers = event.get('headers') or {}
    token = headers.get('X-Auth-Token') or headers.get('x-auth-token')
    admin_pw = headers.get('X-Admin-Password') or headers.get('x-admin-password')

    if admin_pw and admin_pw == os.environ.get('ADMIN_PASSWORD', ''):
        return 'admin', None
    if token:
        cur.execute("SELECT id FROM clients WHERE token = %s", (token,))
        row = cur.fetchone()
        if row:
            return 'client', row[0]
    return None, None


def handler(event: dict, context) -> dict:
    '''Чат клиента и администратора. GET — список сообщений/диалогов, POST — отправка сообщения.'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers(), 'body': ''}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    try:
        cur = conn.cursor()
        role, client_id = resolve_client(cur, event)
        if role is None:
            return {'statusCode': 401, 'headers': cors_headers(), 'body': json.dumps({'error': 'Не авторизован'})}

        params = event.get('queryStringParameters') or {}

        if method == 'GET':
            if role == 'admin' and not params.get('client_id'):
                cur.execute(
                    """
                    SELECT c.id, c.name, c.email,
                        (SELECT text FROM messages m WHERE m.client_id = c.id ORDER BY m.created_at DESC LIMIT 1),
                        (SELECT created_at FROM messages m WHERE m.client_id = c.id ORDER BY m.created_at DESC LIMIT 1),
                        (SELECT COUNT(*) FROM messages m WHERE m.client_id = c.id AND m.sender = 'client' AND m.is_read = FALSE)
                    FROM clients c
                    ORDER BY (SELECT MAX(created_at) FROM messages m WHERE m.client_id = c.id) DESC NULLS LAST, c.created_at DESC
                    """
                )
                dialogs = [
                    {'client_id': r[0], 'name': r[1], 'email': r[2], 'last_text': r[3] or '',
                     'last_at': r[4].isoformat() if r[4] else None, 'unread': r[5]}
                    for r in cur.fetchall()
                ]
                return {'statusCode': 200, 'headers': cors_headers(), 'body': json.dumps({'dialogs': dialogs})}

            target_id = int(params['client_id']) if role == 'admin' else client_id
            cur.execute(
                "SELECT id, sender, text, created_at FROM messages WHERE client_id = %s ORDER BY created_at ASC",
                (target_id,),
            )
            messages = [
                {'id': r[0], 'sender': r[1], 'text': r[2], 'created_at': r[3].isoformat() if r[3] else None}
                for r in cur.fetchall()
            ]
            opposite = 'client' if role == 'admin' else 'admin'
            cur.execute(
                "UPDATE messages SET is_read = TRUE WHERE client_id = %s AND sender = %s AND is_read = FALSE",
                (target_id, opposite),
            )
            conn.commit()
            return {'statusCode': 200, 'headers': cors_headers(), 'body': json.dumps({'messages': messages})}

        body = json.loads(event.get('body') or '{}')
        text = (body.get('text') or '').strip()
        if not text:
            return {'statusCode': 400, 'headers': cors_headers(), 'body': json.dumps({'error': 'Пустое сообщение'})}

        if role == 'admin':
            target_id = int(body['client_id'])
            sender = 'admin'
        else:
            target_id = client_id
            sender = 'client'

        cur.execute(
            "INSERT INTO messages (client_id, sender, text) VALUES (%s, %s, %s) RETURNING id, created_at",
            (target_id, sender, text),
        )
        row = cur.fetchone()
        conn.commit()
        return {
            'statusCode': 200,
            'headers': cors_headers(),
            'body': json.dumps({'id': row[0], 'sender': sender, 'text': text, 'created_at': row[1].isoformat() if row[1] else None}),
        }
    finally:
        cur.close()
        conn.close()
