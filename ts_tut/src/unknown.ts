import assert from "node:assert";

// safer alternative to any
// it forces you to check the type before using it.
// you don't know what's inside

export default function unknown() {

  console.log("***** unknown *****");

  let value: unknown = 10;

  // unlike any, you can't access any properties on an unknown type
  // unless you check the type first
  if (typeof value === "number") {
    const a = value + 10;
    // expect(a).toBe(20);
    assert.equal(a, 20);
  }

  value = "hello";

  if (typeof value === "string") {
    const b = value + "10";
    // expect(b).toBe("hello10");
    assert.equal(b, "hello10");
  }
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  unknown();
}

