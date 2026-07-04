import { Stack } from 'expo-router';
import { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

type BarStyle = 'default' | 'light-content' | 'dark-content';

export default function StatusBarScreen() {
  const [barStyle, setBarStyle] = useState<BarStyle>('default');
  const [hidden, setHidden] = useState(false);

  return (
    <DemoScreen intro="StatusBar controls the system status bar at the top of the screen: the text/icon color (barStyle), visibility, and on Android its background color. It can be rendered as a component (declarative, applies while the screen is mounted) or driven imperatively via static methods.">
      <Stack.Screen options={{ title: 'StatusBar' }} />
      <StatusBar barStyle={barStyle} hidden={hidden} animated />

      <DemoSection
        title="barStyle"
        description="Cycle through the styles and look at the clock/battery icons at the very top of the screen. light-content makes them white; dark-content makes them black.">
        <View style={styles.buttonGroup}>
          {(['default', 'light-content', 'dark-content'] as BarStyle[]).map((style) => (
            <Button
              key={style}
              title={style}
              color={barStyle === style ? palette.tint : undefined}
              onPress={() => setBarStyle(style)}
            />
          ))}
        </View>
        <Text style={styles.current}>Current: {barStyle}</Text>
        <CodeBlock code={`<StatusBar barStyle="light-content" animated />`} />
      </DemoSection>

      <DemoSection
        title="Hiding the status bar"
        description="hidden removes the bar entirely — common for full-screen media.">
        <Button title={hidden ? 'Show status bar' : 'Hide status bar'} onPress={() => setHidden((h) => !h)} />
        <Caption>
          In Expo apps you can also use the expo-status-bar package, whose default style adapts to
          light/dark mode automatically.
        </Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    gap: 4,
  },
  current: {
    fontSize: 14,
    color: palette.textMuted,
    textAlign: 'center',
  },
});
