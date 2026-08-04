import json
import os
import hashlib
import secrets
import psycopg2


def hash_password(password: str) -> str:
    salt = os.environ.get('PASSWORD_SALT', 'poehali_salt')
    return hashlib.sha256((salt + password).encode('utf-8')).hexdigest()


def cors_headers() -> dict:
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token',
        'Access-Control-Max-Age': '86400',
        'Content-Type': 'application/json',
    }


def handler(event: dict, context) -> dict:
    '''Регистрация, вход и получение профиля клиента. action: register | login. GET — профиль по токену.'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers(), 'body': ''}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    try:
        cur = conn.cursor()

        if method == 'GET':
            headers = event.get('headers') or {}
            token = headers.get('X-Auth-Token') or headers.get('x-auth-token') or ''
            if not token:
                return {'statusCode': 401, 'headers': cors_headers(), 'body': json.dumps({'error': 'Не авторизован'})}
            cur.execute("SELECT id, name, email, created_at FROM clients WHERE token = %s", (token,))
            row = cur.fetchone()
            if not row:
                return {'statusCode': 401, 'headers': cors_headers(), 'body': json.dumps({'error': 'Сессия недействительна'})}
            return {
                'statusCode': 200,
                'headers': cors_headers(),
                'body': json.dumps({'id': row[0], 'name': row[1], 'email': row[2], 'created_at': row[3].isoformat() if row[3] else None}),
            }

        body = json.loads(event.get('body') or '{}')
        action = body.get('action', '')
        email = (body.get('email') or '').strip().lower()
        password = body.get('password') or ''

        if action == 'register':
            name = (body.get('name') or '').strip()
            if not name or not email or len(password) < 6:
                return {'statusCode': 400, 'headers': cors_headers(), 'body': json.dumps({'error': 'Заполните имя, email и пароль (от 6 символов)'})}
            cur.execute("SELECT id FROM clients WHERE email = %s", (email,))
            if cur.fetchone():
                return {'statusCode': 409, 'headers': cors_headers(), 'body': json.dumps({'error': 'Этот email уже зарегистрирован'})}
            token = secrets.token_hex(32)
            cur.execute(
                "INSERT INTO clients (name, email, password_hash, token) VALUES (%s, %s, %s, %s) RETURNING id",
                (name, email, hash_password(password), token),
            )
            client_id = cur.fetchone()[0]
            conn.commit()
            return {
                'statusCode': 200,
                'headers': cors_headers(),
                'body': json.dumps({'token': token, 'client': {'id': client_id, 'name': name, 'email': email}}),
            }

        if action == 'login':
            if not email or not password:
                return {'statusCode': 400, 'headers': cors_headers(), 'body': json.dumps({'error': 'Введите email и пароль'})}
            cur.execute("SELECT id, name, password_hash FROM clients WHERE email = %s", (email,))
            row = cur.fetchone()
            if not row or row[2] != hash_password(password):
                return {'statusCode': 401, 'headers': cors_headers(), 'body': json.dumps({'error': 'Неверный email или пароль'})}
            token = secrets.token_hex(32)
            cur.execute("UPDATE clients SET token = %s WHERE id = %s", (token, row[0]))
            conn.commit()
            return {
                'statusCode': 200,
                'headers': cors_headers(),
                'body': json.dumps({'token': token, 'client': {'id': row[0], 'name': row[1], 'email': email}}),
            }

        return {'statusCode': 400, 'headers': cors_headers(), 'body': json.dumps({'error': 'Неизвестное действие'})}
    finally:
        cur.close()
        conn.close()
