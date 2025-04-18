import { test } from "node:test";

import { hello_world } from "./hello-world.js";

test("hello world", () => {
  hello_world();
});
