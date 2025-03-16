import { expect, test } from "bun:test";
import customTypes from "./custom_types";

test("custom types", () => {
	customTypes(expect);
});
