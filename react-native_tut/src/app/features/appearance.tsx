import { Stack } from 'expo-router';
import { Appearance, StyleSheet, Text, View, useColorScheme } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function AppearanceScreen() {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <DemoScreen intro="Appearance exposes the user's system-wide light/dark preference. The useColorScheme hook is the idiomatic way to read it — it re-renders your component when the user flips the OS setting. Change your device theme in system settings and watch this page update live.">
      <Stack.Screen options={{ title: 'Appearance' }} />

      <DemoSection
        title="Current color scheme"
        description="The card below styles itself from useColorScheme().">
        <View style={[styles.card, isDark ? styles.cardDark : styles.cardLight]}>
          <Text style={[styles.cardText, isDark ? styles.cardTextDark : styles.cardTextLight]}>
            {isDark ? '🌙 dark mode' : '☀️ light mode'}
          </Text>
        </View>
        <CodeBlock
          code={`const scheme = useColorScheme(); // 'light' | 'dark' | null

<View style={scheme === 'dark' ? styles.dark : styles.light} />`}
        />
      </DemoSection>

      <DemoSection
        title="Imperative API"
        description="Appearance.getColorScheme() reads once; setColorScheme() can force the app's scheme regardless of the OS.">
        <CodeBlock
          code={`Appearance.getColorScheme();      // '${Appearance.getColorScheme()}'
Appearance.setColorScheme('dark'); // override app-wide
Appearance.setColorScheme(null);   // follow the system again`}
        />
        <Caption>
          In Expo, the app.json key "userInterfaceStyle" must be "automatic" (the default template
          sets this) for the OS setting to reach your app.
        </Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
  },
  cardLight: {
    backgroundColor: '#fef9c3',
  },
  cardDark: {
    backgroundColor: '#1e293b',
  },
  cardText: {
    fontSize: 18,
    fontWeight: '700',
  },
  cardTextLight: {
    color: palette.text,
  },
  cardTextDark: {
    color: '#e2e8f0',
  },
});
