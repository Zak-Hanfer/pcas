FROM django

WORKDIR /app

COPY ../backend/ ./backend/

WORKDIR ./backend

RUN ls -la .

CMD python manage.py runserver
