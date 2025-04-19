import { test } from "node:test";

import { hello_world, whoAmI } from "./hello-world.js";

test("hello world", () => {
  hello_world();
});

test("whoAmI", () => {
  whoAmI("diego", "D", 44);
});
