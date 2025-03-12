import { test, expect } from "bun:test";
import never from "./never";

test("never", () => {
  never();
});
