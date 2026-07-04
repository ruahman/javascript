import { Stack } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function ButtonScreen() {
  const [count, setCount] = useState(0);

  return (
    <DemoScreen intro="Button is the simplest way to get a tappable control. It renders the platform's native-looking button and only exposes title, onPress, color, and disabled — you cannot restyle it further. When you need custom looks, reach for Pressable instead.">
      <Stack.Screen options={{ title: 'Button' }} />

      <DemoSection title="Basic Button" description="title and onPress are the only required props.">
        <Button title={`Pressed ${count} times`} onPress={() => setCount((n) => n + 1)} />
        <CodeBlock code={`<Button title="Press me" onPress={handlePress} />`} />
      </DemoSection>

      <DemoSection
        title="color and disabled"
        description="color tints the text on iOS and the background on Android — one of many small platform differences.">
        <View style={styles.row}>
          <View style={styles.cell}>
            <Button title="Colored" color={palette.danger} onPress={() => {}} />
          </View>
          <View style={styles.cell}>
            <Button title="Disabled" disabled onPress={() => {}} />
          </View>
        </View>
      </DemoSection>

      <DemoSection title="When to use Button">
        <Text style={styles.body}>
          Button is great for prototypes and platform-default UI. The moment you need padding,
          borders, icons, or a press animation, switch to Pressable — see the Pressable page.
        </Text>
        <Caption>Button cannot take a style prop at all.</Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  cell: {
    flex: 1,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    color: palette.text,
  },
});
