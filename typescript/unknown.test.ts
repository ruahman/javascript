import { test, expect } from "bun:test";
import unknown from "./unknown";

test("unknown", () => {
  unknown(expect);
});
