FROM node:alpine

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

ENTRYPOINT ["npm", "run", "host"]