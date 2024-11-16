import { test, expect } from "bun:test";
import defaultParameters from "./default-parameters";

test("default parameters", () => {
  defaultParameters(expect);
});
