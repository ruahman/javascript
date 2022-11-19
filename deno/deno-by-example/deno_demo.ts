import { dayOfYear } from "./deps.ts";
import { copy } from "./deps.ts";
import { qrcode } from "./deps.ts";
import { red } from "./deps.ts";
import { createRequire } from "./deps.ts";

const require = createRequire(import.meta.url);

export default async function demo() {
  const moment = require("moment");

  const args = Deno.args;
  console.log(args);
  console.log(red("hello world"));

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

  console.log(moment().format("MMMM Do YYYY"));
}
