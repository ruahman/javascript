import { expect, test } from "bun:test";
import exhaustive_type_checking from "./exhaustive_type_checking";

test("exhaustive_type_checking", () => {
  exhaustive_type_checking(expect);
});
