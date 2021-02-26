import { Application, send } from "https://deno.land/x/oak/mod.ts"
import api from "./api.ts";

const app = new Application();
const port = 8000;

app.use(async (ctx, next) => {
  await next();
  const time = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url}: ${time}`)
})

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const delta = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${delta}ms`)
});


app.use(async (ctx) => {
  const filePath = ctx.request.url.pathname.trim();
  const fileWhitelist = [
    "/index.html",
    "/javascripts/script.js",
    "/stylesheets/style.css",
    "/images/favicon.png",
  ];

  console.log(fileWhitelist);
  console.log(filePath);

  await send(ctx, filePath, {
    root: `${Deno.cwd()}/public`
  })
  // if(fileWhitelist.includes(filePath)){
  //   console.log("file found");
  //   await send(ctx, filePath, {
  //     root: `${Deno.cwd()}/public`
  //   })
  // }
  // else {
  //   console.log("file not found");
  // }

});


app.use(api.routes());


// app.use((ctx) => {
//   ctx.response.body = "hello nasa";
// });


if(import.meta.main){
  console.log(`hello oak:${port}`);
  await app.listen({
    port: port
  })
}
