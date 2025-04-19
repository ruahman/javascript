import assert from "node:assert";

export function types() {
  assert.equal(typeof 42, "number");
  assert.equal(typeof "kyle", "string");
  assert.equal(typeof true, "boolean");
  assert.equal(typeof undefined, "undefined");
  assert.equal(typeof { age: 32 }, "object");
}
