# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite)
npm run build     # type-check + production build
npm run lint      # ESLint
npm run preview   # serve the production build locally
```

## Architecture

**Stack:** React 19 + TypeScript + Vite + TanStack Router (file-based routing).

**Routing:** TanStack Router uses the Vite plugin (`tanstackRouter` in `vite.config.ts`) to auto-generate `src/routeTree.gen.ts` from the files in `src/routes/`. Never edit `routeTree.gen.ts` by hand — it regenerates on every `dev`/`build` run. Each route file exports a `Route` created with `createFileRoute('/path')`.

**Route layout:** `src/routes/__root.tsx` is the shell — it renders the top nav and `<Outlet />`. Each page under `src/routes/` is a self-contained demo that lives entirely in that one file (context, hooks, child components all co-located).

**Adding a new demo page:** create `src/routes/<slug>.tsx`, export a `Route` with `createFileRoute('/<slug>')`, add a `Link` entry to the `links` array in `__root.tsx`.

**No test framework** is configured — verification is done by running the dev server and checking in a browser.

## React 19 patterns used in this codebase

**`ref` as a plain prop** — function components accept `ref` in their props type directly (`ref?: Ref<T>`); no `forwardRef` wrapper needed. See `use-imperative-handle.tsx` and `ref-as-prop.tsx`.

**Form actions** — `<form action={asyncFn}>` and `useActionState` / `useFormStatus` / `useOptimistic` all require the form's `action` to be an async function (not a URL string). `useFormStatus` must be called from a *descendant* of the form, not the same component that renders it.

**`use()` hook** — `use(promise)` must be inside a `<Suspense>` boundary. Promises passed to `use()` must be created outside render or cached (e.g. in a `Map`) — creating them inline causes re-fetching on every render.

**`useDeferredValue` + `memo`** — `useDeferredValue` only prevents blocking the urgent update; the slow subtree still re-renders unless it is wrapped in `React.memo`. Both are needed together.

## Third-party integrations

**React Compiler** — enabled via `babel-plugin-react-compiler` in `vite.config.ts` (it runs *first* in the Babel `plugins` array, before the signals transform). It auto-memoizes components/hooks at build time, so new code generally does **not** need manual `useMemo` / `useCallback` / `React.memo` — the existing hook demos keep them only as teaching examples. Opt a component out with a `'use no memo'` directive on its first line. The `/react-compiler` page (`react-compiler.tsx`) demonstrates this. The compiler requires code to follow the Rules of React; rule-breaking components are silently skipped, not broken.

**Preact Signals** (`signals.tsx`) — uses `@preact/signals-react`. Components track signal reads automatically because the `@preact/signals-react-transform` Babel plugin is wired into `@vitejs/plugin-react` in `vite.config.ts`. Without that plugin, reading `.value` in a component would not subscribe it to re-render. Signals are read/written via `.value`; `useSignal`/`useComputed` are the component-local variants.
