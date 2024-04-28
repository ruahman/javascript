import { test, expect } from "bun:test";
import functions from "./functions";

test("functions", () => {
  functions(expect);
});
