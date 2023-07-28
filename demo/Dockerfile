FROM node:alpine

WORKDIR /app

COPY . .

RUN npm i

ENTRYPOINT ["npm", "run", "host"]