import json
import os
import smtplib
import psycopg2
from email.mime.text import MIMEText
from email.header import Header


def handler(event: dict, context) -> dict:
    '''Принимает заявку с формы: сохраняет в базу и отправляет уведомление на почту владельца.'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    body = json.loads(event.get('body') or '{}')
    name = (body.get('name') or '').strip()
    email = (body.get('email') or '').strip()
    message = (body.get('message') or '').strip()

    if not name or not email:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Укажите имя и email'}),
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    try:
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO leads (name, email, message) VALUES (%s, %s, %s)",
            (name, email, message),
        )
        conn.commit()
        cur.close()
    finally:
        conn.close()

    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    if smtp_user and smtp_password:
        recipient = 'basmanov1990@yandex.ru'
        text = (
            f'Новая заявка с сайта\n\n'
            f'Имя: {name}\n'
            f'Email: {email}\n'
            f'Сообщение: {message or "—"}\n'
        )
        msg = MIMEText(text, 'plain', 'utf-8')
        msg['Subject'] = Header('Новая заявка с сайта', 'utf-8')
        msg['From'] = smtp_user
        msg['To'] = recipient
        msg['Reply-To'] = email
        try:
            with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
                server.login(smtp_user, smtp_password)
                server.sendmail(smtp_user, [recipient], msg.as_string())
        except Exception:
            pass

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        'body': json.dumps({'success': True}),
    }
