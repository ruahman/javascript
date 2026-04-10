# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

TypeScript tutorial/learning repository. Each topic is a standalone module in `src/` with a corresponding `.test.ts` file using Node's built-in test runner.

## Commands

- **Run all tests:** `npm test -- "src/**/*.test.ts"`
- **Run a single test:** `npm test -- src/hello-world.test.ts`
- **Run a file directly:** `npm run exec src/hello-world.ts`
- **Run file (tsx):** `npm run exec:tsx src/hello-world.ts`
- **Run tests (tsx):** `npm run test:tsx`
- **Type check:** `npm run check`
- **Watch type check:** `npm run watch`
- **Lint:** `npm run lint`
- **Build:** `npm run build`
- **Debug:** `npm run debug src/hello-world.ts`
- **Clean:** `npm run clean`

## Key Details

- Uses Node's `--experimental-transform-types` for direct TS execution (no build step needed for dev)
- `tsx` is available as an alternative executor (`exec:tsx`, `test:tsx`)
- Tests use `node:test` and `node:assert` (not Jest/Vitest)
- Imports use `.ts` extensions (`import { foo } from "./foo.ts"`)
- ESM throughout (`"type": "module"` in package.json)
- `noEmit: true` — type-check only, no JS output generated
- Each source file may have an `import.meta.url` guard for standalone execution

### Decorators

- `experimentalDecorators: true` in tsconfig.json
- `useDefineForClassFields: false` — required for property decorators to work on the prototype

### Strict TypeScript Options

- `noUncheckedIndexedAccess: true` — index signatures return `T | undefined`
- `exactOptionalPropertyTypes: true` — `undefined` is distinct from a missing optional property
- `verbatimModuleSyntax: true` — import/export syntax preserved as-is

### ESLint Rules Turned Off

- `@typescript-eslint/no-explicit-any`
- `@typescript-eslint/no-unused-vars`
- `@typescript-eslint/no-unsafe-function-type`
- `prefer-const`
