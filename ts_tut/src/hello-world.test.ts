import { test } from "bun:test";
import { hello_world } from "./hello-world";

test("hello world", () => {
  hello_world();
});
