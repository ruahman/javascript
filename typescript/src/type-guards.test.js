import { test } from "bun:test";
import { type_guards } from "./type-guards";
test("variables", () => {
    type_guards("test");
    type_guards(3);
    type_guards(true);
});
//# sourceMappingURL=type-guards.test.js.map