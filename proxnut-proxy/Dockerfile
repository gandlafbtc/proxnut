FROM oven/bun:latest
WORKDIR /app
COPY . .
RUN bun install
EXPOSE 3003
ENTRYPOINT ["bun", "index.ts"]