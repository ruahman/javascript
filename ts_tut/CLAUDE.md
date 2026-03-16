# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

TypeScript tutorial/learning repository. Each topic is a standalone module in `src/` with a corresponding `.test.ts` file using Node's built-in test runner.

## Commands

- **Run all tests:** `npm test -- "src/**/*.test.ts"`
- **Run a single test:** `npm test -- src/hello-world.test.ts`
- **Run a file directly:** `npm run exec src/hello-world.ts`
- **Type check:** `npm run check`
- **Lint:** `npm run lint`
- **Build:** `npm run build`

## Key Details

- Uses Node's `--experimental-transform-types` for direct TS execution (no build step needed for dev)
- Tests use `node:test` and `node:assert` (not Jest/Vitest)
- Imports use `.ts` extensions (`import { foo } from "./foo.ts"`)
- ESM throughout (`"type": "module"` in package.json)
- ESLint has `@typescript-eslint/no-explicit-any` turned off
- Each source file may have an `import.meta.url` guard for standalone execution
