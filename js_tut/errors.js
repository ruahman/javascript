import assert from "node:assert";

export function errors() {
  try {
    throw "foobar";
  } catch (err) {
    console.log(err);
  } finally {
    console.log("finally");
  }
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  errors();
}
