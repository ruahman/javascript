import { test } from "node:test";
import assert from "node:assert";

import getTotal from "./rest-parameters.ts";

test("test rest parameters", () => {
  assert.equal(getTotal(1, 2, 3), 6);
  assert.equal(getTotal(1, 2), 3);
  assert.equal(getTotal(1, 2, 3, 4, 5), 15);
});
