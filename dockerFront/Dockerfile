FROM node

WORKDIR /app

COPY ../frontend/ ./frontend/

WORKDIR ./frontend

RUN ls -la .

RUN npm install

CMD npm run start
