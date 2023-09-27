FROM oven/bun:latest
WORKDIR /app
COPY . .
RUN bun install
RUN bun build ./index.ts --compile --outfile server
EXPOSE 3003
ENTRYPOINT ["./server"]