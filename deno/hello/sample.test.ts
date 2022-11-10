import sum from "./sample.ts";
import { assertEquals } from "https://deno.land/std@0.163.0/testing/asserts.ts";

Deno.test("Test sum", () => {
  const res = sum(1, 2);
  assertEquals(res, 3);
});
