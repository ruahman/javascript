FROM frolvlad/alpine-glibc

RUN apk update && apk add curl

EXPOSE 8000

RUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno

CMD ["deno", "run", "--allow-net", "https://deno.land/std/examples/welcome.ts"]