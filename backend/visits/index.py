import json
import os
import urllib.request
import psycopg2

CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
    'Access-Control-Max-Age': '86400',
}


def _geo(ip: str):
    '''Определяет страну по IP через бесплатный сервис ip-api. Возвращает (страна, код).'''
    if not ip or ip.startswith('127.') or ip.startswith('10.') or ip.startswith('192.168.'):
        return ('Локально', 'LC')
    try:
        url = f'http://ip-api.com/json/{ip}?fields=country,countryCode&lang=ru'
        req = urllib.request.Request(url, headers={'User-Agent': 'poehali-visits'})
        with urllib.request.urlopen(req, timeout=3) as r:
            data = json.loads(r.read().decode('utf-8'))
        return (data.get('country') or 'Неизвестно', data.get('countryCode') or '')
    except Exception:
        return ('Неизвестно', '')


def handler(event: dict, context) -> dict:
    '''Учитывает визиты посетителей (POST) и отдаёт статистику по странам админу (GET по паролю).'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS, 'body': ''}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    try:
        if method == 'POST':
            body = json.loads(event.get('body') or '{}')
            path = (body.get('path') or '/')[:255]
            ctx = event.get('requestContext') or {}
            ip = ((ctx.get('identity') or {}).get('sourceIp')) or ''
            country, code = _geo(ip)
            cur = conn.cursor()
            cur.execute(
                "INSERT INTO visits (ip, country, country_code, path) VALUES (%s, %s, %s, %s)",
                (ip[:64], country[:80], code[:8], path),
            )
            conn.commit()
            cur.close()
            return {'statusCode': 200, 'headers': {**CORS, 'Content-Type': 'application/json'}, 'body': json.dumps({'success': True})}

        headers = event.get('headers') or {}
        password = headers.get('X-Admin-Password') or headers.get('x-admin-password') or ''
        admin_password = os.environ.get('ADMIN_PASSWORD', '')
        if not admin_password or password != admin_password:
            return {'statusCode': 401, 'headers': {**CORS, 'Content-Type': 'application/json'}, 'body': json.dumps({'error': 'Неверный пароль'})}

        cur = conn.cursor()
        cur.execute("SELECT COUNT(*) FROM visits")
        total = cur.fetchone()[0]
        cur.execute("SELECT COUNT(DISTINCT ip) FROM visits")
        unique = cur.fetchone()[0]
        cur.execute("SELECT COUNT(*) FROM visits WHERE created_at::date = NOW()::date")
        today = cur.fetchone()[0]
        cur.execute(
            "SELECT country, country_code, COUNT(*) AS c FROM visits GROUP BY country, country_code ORDER BY c DESC LIMIT 20"
        )
        countries = [{'country': r[0], 'code': r[1], 'count': r[2]} for r in cur.fetchall()]
        cur.close()
        return {
            'statusCode': 200,
            'headers': {**CORS, 'Content-Type': 'application/json'},
            'body': json.dumps({'total': total, 'unique': unique, 'today': today, 'countries': countries}),
        }
    finally:
        conn.close()
