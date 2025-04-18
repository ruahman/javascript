import assert from "node:assert";

export function hello_world() {
  console.log("hello world");
  assert.equal(true, true);
  assert.deepEqual({ foo: "bar" }, { foo: "bar" });
  assert.ok(true);
}
