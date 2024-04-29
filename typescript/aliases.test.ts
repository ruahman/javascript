import { test, expect } from "bun:test";

import aliases from "./aliases";

test("aliases", () => {
  aliases(expect);
});
