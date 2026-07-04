# React Native Feature Tour

An Expo + TypeScript app where every page demos and explains one React Native feature with live, interactive examples and code snippets. Built with [Expo Router](https://docs.expo.dev/router/introduction/) (SDK 57, file-based routing).

## Run it

```sh
npm install
npm start          # then press i (iOS simulator), a (Android), or w (web)
```

## Structure

```
src/
  app/
    _layout.tsx          # Root Stack navigator
    index.tsx            # Home: SectionList of all features
    features/*.tsx       # One route per feature (30 pages)
  components/demo.tsx    # DemoScreen / DemoSection / CodeBlock / Caption
  constants/
    features.ts          # Feature registry that drives the home screen
    theme.ts             # Shared color palette
```

To add a page: create `src/app/features/<slug>.tsx` and add an entry to `src/constants/features.ts`.

## Covered features

- **Core Components** — View, Text, Image/ImageBackground, TextInput, ScrollView + RefreshControl, Button, Pressable & Touchables, Switch, Modal, ActivityIndicator, StatusBar, KeyboardAvoidingView, Safe Areas
- **Lists** — FlatList, SectionList
- **Styling & Layout** — StyleSheet, Flexbox (interactive playground), Dimensions/useWindowDimensions, Transforms, PixelRatio
- **Animation & Gestures** — Animated (timing, interpolation, spring), PanResponder (draggable ball)
- **Device APIs** — Platform, Alert, Appearance/useColorScheme, AppState, Keyboard, Linking, Share, Vibration

Some demos (Vibration, Share, AppState, StatusBar) behave best on a physical device.
