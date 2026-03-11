import { test } from "node:test";
import never from "./never.ts";

test("never", () => {
  never();
});
