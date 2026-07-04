export type Feature = {
  slug: string;
  title: string;
  subtitle: string;
};

export type FeatureSection = {
  title: string;
  data: Feature[];
};

export const featureSections: FeatureSection[] = [
  {
    title: 'Core Components',
    data: [
      { slug: 'view', title: 'View', subtitle: 'The fundamental building block of every UI' },
      { slug: 'text', title: 'Text', subtitle: 'Displaying, nesting, and styling text' },
      { slug: 'image', title: 'Image', subtitle: 'Local, remote, and background images' },
      { slug: 'text-input', title: 'TextInput', subtitle: 'Keyboard input, props, and events' },
      { slug: 'scroll-view', title: 'ScrollView', subtitle: 'Scrolling containers and pull-to-refresh' },
      { slug: 'button', title: 'Button', subtitle: 'The simplest built-in button' },
      { slug: 'pressable', title: 'Pressable & Touchables', subtitle: 'Custom press interactions' },
      { slug: 'switch', title: 'Switch', subtitle: 'Boolean on/off toggle' },
      { slug: 'modal', title: 'Modal', subtitle: 'Content presented above the current view' },
      { slug: 'activity-indicator', title: 'ActivityIndicator', subtitle: 'Loading spinners' },
      { slug: 'status-bar', title: 'StatusBar', subtitle: 'Controlling the system status bar' },
      { slug: 'keyboard-avoiding-view', title: 'KeyboardAvoidingView', subtitle: 'Keeping inputs visible above the keyboard' },
      { slug: 'safe-area-view', title: 'Safe Areas', subtitle: 'Avoiding notches and system bars' },
    ],
  },
  {
    title: 'Lists',
    data: [
      { slug: 'flat-list', title: 'FlatList', subtitle: 'Performant scrolling lists' },
      { slug: 'section-list', title: 'SectionList', subtitle: 'Lists with grouped sections' },
    ],
  },
  {
    title: 'Styling & Layout',
    data: [
      { slug: 'stylesheet', title: 'StyleSheet', subtitle: 'How styling works in React Native' },
      { slug: 'flexbox', title: 'Flexbox Layout', subtitle: 'flexDirection, justify, align, and flex' },
      { slug: 'dimensions', title: 'Dimensions', subtitle: 'Screen size and useWindowDimensions' },
      { slug: 'transforms', title: 'Transforms', subtitle: 'Rotate, scale, skew, and translate' },
      { slug: 'pixel-ratio', title: 'PixelRatio', subtitle: 'Device pixel density' },
    ],
  },
  {
    title: 'Animation & Gestures',
    data: [
      { slug: 'animated', title: 'Animated', subtitle: 'The built-in animation API' },
      { slug: 'pan-responder', title: 'PanResponder', subtitle: 'Low-level gesture handling' },
    ],
  },
  {
    title: 'Device APIs',
    data: [
      { slug: 'platform', title: 'Platform', subtitle: 'Detecting and branching per platform' },
      { slug: 'alert', title: 'Alert', subtitle: 'Native alert dialogs' },
      { slug: 'appearance', title: 'Appearance', subtitle: 'Light/dark mode detection' },
      { slug: 'app-state', title: 'AppState', subtitle: 'Foreground/background transitions' },
      { slug: 'keyboard', title: 'Keyboard', subtitle: 'Keyboard events and dismissal' },
      { slug: 'linking', title: 'Linking', subtitle: 'Opening URLs and deep links' },
      { slug: 'share', title: 'Share', subtitle: 'The native share sheet' },
      { slug: 'vibration', title: 'Vibration', subtitle: 'Haptic feedback via vibration' },
    ],
  },
];

export const allFeatures: Feature[] = featureSections.flatMap((s) => s.data);
