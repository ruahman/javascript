import { test } from "node:test";
import assert from "node:assert";
import { hello } from "./hello-world";

test("hello world", () => {
  assert.equal(hello(), "hello world");
});
