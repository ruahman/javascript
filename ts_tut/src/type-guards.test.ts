import { test } from "node:test";

import { type_guards } from "./type-guards.ts";

test("variables", () => {
  type_guards("test");
  type_guards(3);
  type_guards(true);
});
