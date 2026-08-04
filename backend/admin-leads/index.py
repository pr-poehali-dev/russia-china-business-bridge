import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    '''Возвращает список заявок для администратора. Требует пароль в заголовке X-Admin-Password.'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    headers = event.get('headers') or {}
    password = headers.get('X-Admin-Password') or headers.get('x-admin-password') or ''
    admin_password = os.environ.get('ADMIN_PASSWORD', '')

    if not admin_password or password != admin_password:
        return {
            'statusCode': 401,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Неверный пароль'}),
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    try:
        cur = conn.cursor()
        cur.execute(
            "SELECT id, name, email, message, created_at FROM leads ORDER BY created_at DESC"
        )
        rows = cur.fetchall()
        cur.close()
    finally:
        conn.close()

    leads = [
        {
            'id': r[0],
            'name': r[1],
            'email': r[2],
            'message': r[3] or '',
            'created_at': r[4].isoformat() if r[4] else None,
        }
        for r in rows
    ]

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': json.dumps({'leads': leads}),
    }
