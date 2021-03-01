FROM hayd/deno:alpine-1.7.2

WORKDIR /app

COPY . .

USER deno

CMD ["run", "--allow-net", "--allow-read", "src/mod.ts"]

EXPOSE 8000