web: gunicorn backend blog_backend blog_backend.wsgi:application --log-file - --log-level debug
python manage.py collectstatic --noinput
manage.py migrate