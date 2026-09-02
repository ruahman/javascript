import assert from "node:assert";

export default function whileStatement() {
  console.log("***** while statement *****");
  let wcounter = 0;

  while (wcounter < 5) {
    console.log(wcounter);
    wcounter++;
  }
  assert.equal(wcounter, 5);
  // expect(wcounter).toBe(5);

  let wi = 0;

  do {
    console.log(wi);
    wi++;
  } while (wi < 10);
  assert.equal(wi, 10);
  // expect(wi).toBe(10);
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  whileStatement();
}

