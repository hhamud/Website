release: cd backend && python manage.py migrate
web: gunicorn backend.blog_backend.wsgi —-log-file -