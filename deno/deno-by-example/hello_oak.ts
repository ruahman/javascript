// deno run --allow-net --allow-read .\hello_oak.ts

import {
  Application,
  Router,
  send,
} from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();
const port = 8000;

const route = new Router();
route.get("/", (ctx) => {
  ctx.response.body = "hello route";
});

app.use(async (ctx, next) => {
  await next();
  console.log(`middleware: ${ctx.request.method} ${ctx.request.url}`);
});

app.use(route.routes());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
    ctx.response.body = "houston there was a problem";
  }
});

app.use(async (ctx) => {
  const fileName = ctx.request.url.pathname;
  const fileWhiteList = [
    "/test.txt",
  ];
  if (fileWhiteList.includes(fileName)) {
    await send(ctx, fileName, {
      root: `${Deno.cwd()}/static`,
    });
  }
});

// app.use((ctx) => {
//   ctx.response.body = "hello world";
// });

if (import.meta.main) {
  console.log("http://localhost:8000/");

  await app.listen({ port: port });
}
