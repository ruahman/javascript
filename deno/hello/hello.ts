import { dayOfYear } from "./deps.ts";
import { copy } from "./deps.ts";
import { serve } from "./deps.ts";
import { qrcode } from "./deps.ts";

const greeting: string = "Hello world";

console.log(greeting);
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

function handler(_: Request): Response {
  return new Response("Hello, World!");
}

const _ = serve(handler, { port: 8000 });
console.log("listening on port 8000");
