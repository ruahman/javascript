import assert from "node:assert";

export default function casting() {
  console.log("***** casting *****");
  // as to string
  const q: unknown = "hello world";
  assert.equal(typeof q as string, "string");
  const humid3 = 79 as number;
  assert.equal(typeof humid3, "number");

  // <>
  const w: unknown = "hello world2";
  assert.equal(typeof (<string>w), "string");
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  casting();
}
