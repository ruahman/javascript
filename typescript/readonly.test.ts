import { test, expect } from "bun:test";
import readonly from "./readonly";

test("readonly", () => {
  readonly(expect);
});
