FROM ubuntu:20.04

RUN apt-get update && \
    apt-get install -y curl unzip \ 
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists \
    && rm -rf /var/cache

EXPOSE 8000

RUN curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.6.3 

ENV PATH="/root/.deno/bin:$PATH"

RUN deno run --allow-run --allow-read https://deno.land/x/denopack@0.10.0/install.ts

CMD ["deno", "run", "--allow-net", "https://deno.land/std/examples/welcome.ts"]