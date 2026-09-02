export function hello(): string {
  console.log("***** hello world *****");
  return "hello world";
}


import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  console.log(hello());
}
