import { Stack } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, type FlexStyle } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

const DIRECTIONS: FlexStyle['flexDirection'][] = ['row', 'row-reverse', 'column', 'column-reverse'];
const JUSTIFY: FlexStyle['justifyContent'][] = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];

export default function FlexboxScreen() {
  const [direction, setDirection] = useState<FlexStyle['flexDirection']>('row');
  const [justify, setJustify] = useState<FlexStyle['justifyContent']>('flex-start');

  return (
    <DemoScreen intro="Every View lays out its children with flexbox. Unlike the web, flexDirection defaults to column (not row) and flex only takes a single number. flexDirection picks the main axis, justifyContent distributes along it, and alignItems aligns across it.">
      <Stack.Screen options={{ title: 'Flexbox Layout' }} />

      <DemoSection
        title="Interactive playground"
        description="Tap the options and watch the boxes move.">
        <Text style={styles.propLabel}>flexDirection</Text>
        <View style={styles.optionRow}>
          {DIRECTIONS.map((d) => (
            <Pressable
              key={d}
              style={[styles.option, direction === d && styles.optionActive]}
              onPress={() => setDirection(d)}>
              <Text style={[styles.optionText, direction === d && styles.optionTextActive]}>{d}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.propLabel}>justifyContent</Text>
        <View style={styles.optionRow}>
          {JUSTIFY.map((j) => (
            <Pressable
              key={j}
              style={[styles.option, justify === j && styles.optionActive]}
              onPress={() => setJustify(j)}>
              <Text style={[styles.optionText, justify === j && styles.optionTextActive]}>{j}</Text>
            </Pressable>
          ))}
        </View>

        <View style={[styles.playground, { flexDirection: direction, justifyContent: justify }]}>
          {['A', 'B', 'C'].map((label, i) => (
            <View key={label} style={[styles.playBox, { backgroundColor: BOX_COLORS[i] }]}>
              <Text style={styles.playBoxText}>{label}</Text>
            </View>
          ))}
        </View>
      </DemoSection>

      <DemoSection
        title="flex: growing to fill space"
        description="flex numbers are ratios: these boxes have flex 1, 2, and 3, so they take 1/6, 2/6, and 3/6 of the row.">
        <View style={styles.flexRow}>
          <View style={[styles.flexCell, { flex: 1, backgroundColor: BOX_COLORS[0] }]}>
            <Text style={styles.playBoxText}>1</Text>
          </View>
          <View style={[styles.flexCell, { flex: 2, backgroundColor: BOX_COLORS[1] }]}>
            <Text style={styles.playBoxText}>2</Text>
          </View>
          <View style={[styles.flexCell, { flex: 3, backgroundColor: BOX_COLORS[2] }]}>
            <Text style={styles.playBoxText}>3</Text>
          </View>
        </View>
        <CodeBlock code={`<View style={{ flex: 2 }} />  // twice the share of flex: 1`} />
        <Caption>gap, rowGap, and columnGap are also supported, as used throughout this app.</Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const BOX_COLORS = ['#60a5fa', '#34d399', '#f472b6'];

const styles = StyleSheet.create({
  propLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: palette.textMuted,
  },
  optionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  option: {
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
  },
  optionActive: {
    backgroundColor: palette.tint,
    borderColor: palette.tint,
  },
  optionText: {
    fontSize: 12,
    color: palette.text,
  },
  optionTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  playground: {
    height: 160,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 8,
    padding: 8,
    gap: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  playBox: {
    width: 44,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playBoxText: {
    color: '#fff',
    fontWeight: '700',
  },
  flexRow: {
    flexDirection: 'row',
    height: 56,
    gap: 6,
  },
  flexCell: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
