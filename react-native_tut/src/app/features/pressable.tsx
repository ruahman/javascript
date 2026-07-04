import { Stack } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function PressableScreen() {
  const [lastEvent, setLastEvent] = useState('none yet');

  return (
    <DemoScreen intro="Pressable is the modern, recommended API for press interactions. Its style prop and children can be functions of the pressed state, so you can restyle on press without extra state. It replaces the older Touchable* family, though TouchableOpacity is still common for its simple fade effect.">
      <Stack.Screen options={{ title: 'Pressable & Touchables' }} />

      <DemoSection
        title="Pressed-state styling"
        description="The style function receives { pressed } — hold the button down to see it change.">
        <Pressable
          style={({ pressed }) => [styles.pressable, pressed && styles.pressablePressed]}>
          {({ pressed }) => (
            <Text style={styles.pressableText}>{pressed ? 'Pressed!' : 'Press and hold me'}</Text>
          )}
        </Pressable>
        <CodeBlock
          code={`<Pressable style={({ pressed }) => [
  styles.base,
  pressed && styles.pressed,
]}>`}
        />
      </DemoSection>

      <DemoSection
        title="Press event lifecycle"
        description="Pressable distinguishes press-in, press-out, press, and long-press.">
        <Pressable
          style={styles.eventBox}
          onPressIn={() => setLastEvent('onPressIn')}
          onPressOut={() => setLastEvent('onPressOut')}
          onPress={() => setLastEvent('onPress')}
          onLongPress={() => setLastEvent('onLongPress (hold ≥500ms)')}>
          <Text style={styles.eventText}>Tap, or press and hold</Text>
        </Pressable>
        <Caption>Last event: {lastEvent}</Caption>
      </DemoSection>

      <DemoSection
        title="TouchableOpacity (legacy)"
        description="Fades its children while pressed. Still fine to use, but Pressable covers every case it does and more.">
        <TouchableOpacity activeOpacity={0.4} style={styles.touchable}>
          <Text style={styles.pressableText}>TouchableOpacity fades on press</Text>
        </TouchableOpacity>
      </DemoSection>

      <DemoSection
        title="hitSlop"
        description="Expands the touchable area beyond the visible bounds — important for small targets like icons.">
        <View style={styles.hitSlopRow}>
          <Pressable hitSlop={20} style={styles.tinyTarget} onPress={() => setLastEvent('tiny target (hitSlop 20)')} />
          <Text style={styles.hitSlopLabel}>12×12 dot, but tappable 20pt around it</Text>
        </View>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: palette.tint,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  pressablePressed: {
    backgroundColor: '#1e40af',
    transform: [{ scale: 0.97 }],
  },
  pressableText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  eventBox: {
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  eventText: {
    color: palette.text,
    fontWeight: '500',
  },
  touchable: {
    backgroundColor: palette.success,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  hitSlopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 8,
  },
  tinyTarget: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: palette.danger,
  },
  hitSlopLabel: {
    fontSize: 13,
    color: palette.textMuted,
    flex: 1,
  },
});
