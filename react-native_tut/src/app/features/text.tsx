import { Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function TextScreen() {
  const [presses, setPresses] = useState(0);

  return (
    <DemoScreen intro="Text is the only component that can render strings. It supports nesting (inner Text inherits the outer style), press handling, and line-limiting. Text does not inherit styles from surrounding Views — inheritance only happens inside nested Text.">
      <Stack.Screen options={{ title: 'Text' }} />

      <DemoSection
        title="Nested Text inherits styles"
        description="The inner Text components inherit fontSize and color from the parent, and add their own styles on top.">
        <Text style={styles.paragraph}>
          You can nest <Text style={styles.bold}>bold</Text>,{' '}
          <Text style={styles.italic}>italic</Text>, and{' '}
          <Text style={styles.highlight}>highlighted</Text> text inline.
        </Text>
        <CodeBlock
          code={`<Text style={{ fontSize: 16 }}>
  You can nest <Text style={{ fontWeight: 'bold' }}>bold</Text> text.
</Text>`}
        />
      </DemoSection>

      <DemoSection
        title="numberOfLines + ellipsizeMode"
        description="Limit text to a number of lines; overflow is truncated with an ellipsis.">
        <Text numberOfLines={2} style={styles.paragraph}>
          This paragraph is intentionally long so that it will not fit on two lines. React Native
          truncates it and adds an ellipsis at the end, which is exactly what numberOfLines is for
          when rendering previews of long content.
        </Text>
        <CodeBlock code={`<Text numberOfLines={2} ellipsizeMode="tail">…</Text>`} />
      </DemoSection>

      <DemoSection
        title="Pressable text"
        description="Text has its own onPress — useful for inline links without wrapping in a Pressable.">
        <Text style={styles.link} onPress={() => setPresses((n) => n + 1)}>
          Tap me — pressed {presses} {presses === 1 ? 'time' : 'times'}
        </Text>
        <Caption>selectable, onPress, onLongPress all work directly on Text.</Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: palette.text,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  highlight: {
    backgroundColor: '#fef08a',
  },
  link: {
    fontSize: 16,
    color: palette.tint,
    textDecorationLine: 'underline',
  },
});
