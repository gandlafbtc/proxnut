FROM denoland/deno:latest
EXPOSE 4444

WORKDIR /app

ADD . /app

RUN deno cache server.ts

CMD ["run" , "--allow-net", "--allow-read",  "server.ts"]