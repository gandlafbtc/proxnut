FROM node:alpine AS build

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build

FROM httpd:2.4 as release
COPY --from=build /app/dist/lib/@proxnut/wallet-comp.js /usr/local/apache2/htdocs/
COPY --from=build /app/index.html /usr/local/apache2/htdocs/
COPY --from=build /app/cashu-wallet.css /usr/local/apache2/htdocs/