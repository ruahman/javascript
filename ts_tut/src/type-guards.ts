// you need type guards before doing an operation that is type specific

export function type_guards(x: string | number | boolean | number[]) {
  console.log("***** types guard *****");

  if (typeof x == "string") {
    console.log(x[0]);
  }
  if (typeof x == "number") {
    console.log(x + 3);
  }
  if (typeof x == "boolean") {
    console.log(x && true);
  }
  if (x instanceof Array) {
    console.log(x.length);
  }
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  type_guards(22);
}
