import { dayOfYear } from "./deps.ts";
import { copy } from "./deps.ts";
// import { serve } from "./deps.ts";
import { qrcode } from "./deps.ts";

export default async function demo() {
  const args = Deno.args;
  console.log(args);

  console.log(dayOfYear(new Date("2020-2-22")));

  const encoder = new TextEncoder();
  const fileGreeting = encoder.encode("Hello file");

  await Deno.writeFile("test.txt", fileGreeting);

  const file = await Deno.open("test.txt");
  await copy(file, Deno.stdout);
  file.close();

  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  const base64Image = await qrcode("bitcoin:ADDRESS?amount=0.5&label=ORDER");
  console.log(base64Image);

  function _handler(_: Request): Response {
    return new Response("Hello, World!");
  }

  // const _ = serve(handler, { port: 8000 });

  // deno info : show dependencies of file, also where cache of compile file lives

  // deno cache:  every file we import gets cached in $DENO_DIR
  // deno run --reload file : reload imports
  // deno caches our packages
  // you can change DENO_DIR
  //  DENO_DIR=./deno_dir deno cache src/deps.ts

  // locking dependencies:
  // deno cache --lock=lock.json --lock-write src/deps.ts
  //    as we cashe the files imports we also keep a hash

  // deno upgrade:  get latest deno
  // deno info: a dependenciy inspector

  // deno info: returns info about deno if no file is specified

  // deno run --reload :  reloads all imports to cache
}
