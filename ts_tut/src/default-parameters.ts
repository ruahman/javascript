import assert from "node:assert";

// function can have default parameters
function applyDiscount(price: number, discount = 0.05) {
  return price * (1 - discount);
}

export default function defaultParameters () {
  console.log("***** default parameters *****");
  assert.equal(applyDiscount(100), 95);
  assert.equal(applyDiscount(100, 0.1), 90);
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  defaultParameters();
}
