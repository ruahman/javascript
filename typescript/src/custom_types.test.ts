import { test, expect } from "bun:test";
import customTypes from "./custom_types";

test("custom types", () => {
  customTypes(expect);
});
