import json
import os
import psycopg2

CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
    'Access-Control-Max-Age': '86400',
}


def _resp(status, payload):
    return {'statusCode': status, 'headers': {**CORS, 'Content-Type': 'application/json'}, 'body': json.dumps(payload)}


def _post(r):
    return {
        'id': r[0],
        'title': r[1],
        'excerpt': r[2] or '',
        'content': r[3],
        'cover_url': r[4] or '',
        'published': r[5],
        'created_at': r[6].isoformat() if r[6] else None,
    }


def handler(event: dict, context) -> dict:
    '''Блог: публичный список статей (GET), создание/редактирование/удаление только для админа по паролю.'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS, 'body': ''}

    headers = event.get('headers') or {}
    password = headers.get('X-Admin-Password') or headers.get('x-admin-password') or ''
    admin_password = os.environ.get('ADMIN_PASSWORD', '')
    is_admin = bool(admin_password) and password == admin_password
    params = event.get('queryStringParameters') or {}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    try:
        cur = conn.cursor()

        if method == 'GET':
            if params.get('all') == '1':
                if not is_admin:
                    return _resp(401, {'error': 'Неверный пароль'})
                cur.execute("SELECT id, title, excerpt, content, cover_url, published, created_at FROM posts ORDER BY created_at DESC")
            else:
                cur.execute("SELECT id, title, excerpt, content, cover_url, published, created_at FROM posts WHERE published = TRUE ORDER BY created_at DESC")
            posts = [_post(r) for r in cur.fetchall()]
            cur.close()
            return _resp(200, {'posts': posts})

        if not is_admin:
            return _resp(401, {'error': 'Неверный пароль'})

        body = json.loads(event.get('body') or '{}')

        if method == 'POST':
            title = (body.get('title') or '').strip()
            if not title:
                return _resp(400, {'error': 'Укажите заголовок'})
            cur.execute(
                "INSERT INTO posts (title, excerpt, content, cover_url, published) VALUES (%s, %s, %s, %s, %s) RETURNING id, title, excerpt, content, cover_url, published, created_at",
                (title[:255], (body.get('excerpt') or '').strip(), (body.get('content') or '').strip(), (body.get('cover_url') or '').strip(), bool(body.get('published', True))),
            )
            row = cur.fetchone()
            conn.commit()
            cur.close()
            return _resp(200, {'post': _post(row)})

        if method == 'PUT':
            pid = body.get('id')
            if not pid:
                return _resp(400, {'error': 'Нет id'})
            cur.execute(
                "UPDATE posts SET title=%s, excerpt=%s, content=%s, cover_url=%s, published=%s, updated_at=NOW() WHERE id=%s RETURNING id, title, excerpt, content, cover_url, published, created_at",
                ((body.get('title') or '').strip()[:255], (body.get('excerpt') or '').strip(), (body.get('content') or '').strip(), (body.get('cover_url') or '').strip(), bool(body.get('published', True)), int(pid)),
            )
            row = cur.fetchone()
            conn.commit()
            cur.close()
            if not row:
                return _resp(404, {'error': 'Не найдено'})
            return _resp(200, {'post': _post(row)})

        if method == 'DELETE':
            pid = body.get('id') or params.get('id')
            if not pid:
                return _resp(400, {'error': 'Нет id'})
            cur.execute("DELETE FROM posts WHERE id=%s", (int(pid),))
            conn.commit()
            cur.close()
            return _resp(200, {'success': True})

        return _resp(405, {'error': 'Method not allowed'})
    finally:
        conn.close()
