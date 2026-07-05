import assert from "node:assert";

export default function () {
  // as to string
  const q: unknown = "hello world";
  assert.equal(typeof q as string, "string");
  const humid3 = 79 as number;
  assert.equal(typeof humid3, "number");

  // <>
  const w: unknown = "hello world2";
  assert.equal(typeof (<string>w), "string");
}
