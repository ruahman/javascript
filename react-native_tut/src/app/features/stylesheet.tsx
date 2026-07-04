import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function StyleSheetScreen() {
  return (
    <DemoScreen intro="Styling in React Native looks like CSS-in-JS but is not CSS: properties are camelCased, values are unitless density-independent points, and there is no cascade or selectors. StyleSheet.create groups styles, enables validation, and signals intent; arrays merge styles with later entries winning.">
      <Stack.Screen options={{ title: 'StyleSheet' }} />

      <DemoSection
        title="StyleSheet.create"
        description="Define styles once outside the component and reference them by name.">
        <View style={styles.demoBox}>
          <Text style={styles.demoText}>Styled via StyleSheet.create</Text>
        </View>
        <CodeBlock
          code={`const styles = StyleSheet.create({
  box: { padding: 16, borderRadius: 8 },
  text: { fontSize: 16, fontWeight: '600' },
});

<View style={styles.box}><Text style={styles.text} /></View>`}
        />
      </DemoSection>

      <DemoSection
        title="Style arrays: composition & overrides"
        description="Passing an array merges styles left to right — the standard pattern for variants and conditional styles.">
        <View style={styles.rowGap}>
          <View style={[styles.badge]}>
            <Text style={styles.badgeText}>base</Text>
          </View>
          <View style={[styles.badge, styles.badgeSuccess]}>
            <Text style={styles.badgeText}>base + success</Text>
          </View>
          <View style={[styles.badge, styles.badgeSuccess, { borderRadius: 999 }]}>
            <Text style={styles.badgeText}>+ inline override</Text>
          </View>
        </View>
        <CodeBlock code={`<View style={[styles.badge, isOk && styles.success]} />`} />
      </DemoSection>

      <DemoSection title="Useful constants">
        <Text style={styles.body}>
          StyleSheet.hairlineWidth is the thinnest visible line on the device (used for the border
          below), and StyleSheet.absoluteFill is shorthand for position absolute with all edges 0.
        </Text>
        <View style={styles.hairlineDemo} />
        <Caption>hairlineWidth on this device: {StyleSheet.hairlineWidth}</Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  demoBox: {
    backgroundColor: palette.tintSoft,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  demoText: {
    fontSize: 16,
    fontWeight: '600',
    color: palette.tint,
  },
  rowGap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  badge: {
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  badgeSuccess: {
    backgroundColor: '#bbf7d0',
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: palette.text,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    color: palette.text,
  },
  hairlineDemo: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: palette.text,
  },
});
