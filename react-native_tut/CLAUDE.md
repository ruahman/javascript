# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```sh
npm start          # expo start — then press i (iOS simulator), a (Android), or w (web)
npm run ios        # expo start --ios
npm run android    # expo start --android
npm run web        # expo start --web
npm run lint       # expo lint (ESLint flat config, eslint-config-expo)
npx tsc --noEmit   # type check (strict mode)
```

There is no test suite.

## What this app is

A React Native feature tour: an Expo SDK 57 + TypeScript app where every page demos one React Native feature with live, interactive examples and code snippets. Uses Expo Router file-based routing with routes under `src/app/` (a root `Stack` in `_layout.tsx`). Typed routes and the React Compiler are enabled in `app.json` experiments.

## Architecture

The app is driven by a **feature registry**: `src/constants/features.ts` exports `featureSections` (slug/title/subtitle grouped by category), which the home screen (`src/app/index.tsx`, a SectionList) renders as links to `/features/<slug>`. Each feature is a route file at `src/app/features/<slug>.tsx`.

**To add a feature page:** create `src/app/features/<slug>.tsx` and add an entry to `src/constants/features.ts` — both steps are required or the page won't appear on the home screen.

Every feature screen follows the same pattern (see any file in `src/app/features/` for reference):

- Wrap the page in `DemoScreen` (with an `intro` prop) and compose `DemoSection`, `CodeBlock`, and `Caption` from `src/components/demo.tsx` — don't hand-roll page/card layout.
- Set the header title inline with `<Stack.Screen options={{ title: '...' }} />`.
- Colors come from `palette` in `src/constants/theme.ts` (light theme only).

Imports use the `@/*` alias for `src/*` (and `@/assets/*` for `assets/*`), configured in `tsconfig.json`.
