import { expect, test } from "bun:test";

import aliases from "./aliases.ts";

test("aliases", () => {
  aliases(expect);
});
