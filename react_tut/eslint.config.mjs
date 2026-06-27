// @ts-check
import js from "@eslint/js";
import ts from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    { ignores: ["dist/**", "src/routeTree.gen.ts"] },
    js.configs.recommended,
    ...ts.configs.recommended,
    {
        files: ["**/*.{js,ts}"],
    },
]);
