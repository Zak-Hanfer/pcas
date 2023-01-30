from python:latest

ADD . .

RUN pip install Django
RUN pip install requests
RUN pip install beautifulsoup4
RUN pip install Pillow
RUN pip install djangorestframework


CMD ["python" , "./manage.py", "runserver" ]