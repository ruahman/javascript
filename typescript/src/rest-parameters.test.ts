import { expect, test } from "bun:test";

import { getTotal } from "./rest-parameters.ts";

test("test rest parameters", () => {
  expect(getTotal(1, 2, 3)).toBe(6);
  expect(getTotal(1, 2)).toBe(3);
  expect(getTotal(1, 2, 3, 4, 5)).toBe(15);
});
