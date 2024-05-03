import { test, expect } from "bun:test";

import variables from "./variables";

test("variables", () => {
  variables(expect);
});
