import assert from "node:assert/strict";

export default function function_type() {
  console.log("***** function types *****");

  // setup function type
  let addtype: (x: number, y: number) => number;

  addtype = (x: number, y: number): number => {
    return x + y;
  };

  // expect(addtype(1, 2)).toBe(3);
  assert.equal(addtype(1, 2), 3);

  // setup function type with alias
  type Add = (x: number, y: number) => number;

  const addtype2: Add = (x: number, y: number): number => {
    return x + y;
  };

  // expect(addtype2(1, 2)).toBe(3);
  assert.equal(addtype2(1, 2), 3);
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  function_type();
}
