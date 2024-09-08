import { test, expect } from "bun:test";
import decorator from "./decorators";

test("decorator", (t) => {
  decorator(expect);
});
