import { expect, test } from "bun:test";
import never from "./never";

test("never", () => {
  never();
});
