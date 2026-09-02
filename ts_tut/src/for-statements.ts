import assert from "node:assert";

export default function for_statements() {
  console.log("***** for statements *****");
  // for (;;) {
  //   console.log("infinate loop");
  // }

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  let i = 0;
  for (;;) {
    console.log(i);
    i++;
    if (i > 9) break;
  }

  assert.equal(i, 10);
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  for_statements();
}
