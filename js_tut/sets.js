import assert from "node:assert";

// every element is unique

export function sets() {
  var letters = new Set(["a", "b", "c"]);
  letters.add("a");
  letters.add("a");
  letters.add("a");
  letters.add("a");
  assert.equal(letters.size, 3);
  for (const x of letters) {
    console.log(x);
  }
  assert.equal(letters.has("a"), true);
  assert.equal(letters.has("z"), false);
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  sets();
}
