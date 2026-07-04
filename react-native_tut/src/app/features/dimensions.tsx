import { Stack } from 'expo-router';
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function DimensionsScreen() {
  const { width, height, scale, fontScale } = useWindowDimensions();

  return (
    <DemoScreen intro="useWindowDimensions returns the window's size and updates automatically on rotation, foldable changes, or split-screen resizing — it is the recommended way to read screen size. The older Dimensions.get() reads a one-time snapshot and needs manual event listeners to stay current.">
      <Stack.Screen options={{ title: 'Dimensions' }} />

      <DemoSection
        title="Live values (rotate your device!)"
        description="These come from useWindowDimensions and re-render on change.">
        <View style={styles.grid}>
          <Stat label="width" value={`${Math.round(width)}pt`} />
          <Stat label="height" value={`${Math.round(height)}pt`} />
          <Stat label="scale" value={`${scale}x`} />
          <Stat label="fontScale" value={`${fontScale}x`} />
        </View>
        <CodeBlock
          code={`const { width, height, scale, fontScale } =
  useWindowDimensions();`}
        />
      </DemoSection>

      <DemoSection
        title="Responsive layout"
        description="A common pattern: size elements as a fraction of the window width. This bar is exactly 60% of the window.">
        <View style={styles.track}>
          <View style={[styles.bar, { width: width * 0.6 }]} />
        </View>
        <Caption>width * 0.6 = {Math.round(width * 0.6)}pt</Caption>
      </DemoSection>

      <DemoSection
        title="Dimensions.get (legacy)"
        description="'window' is the visible app area; 'screen' is the physical display (on Android these can differ due to system bars).">
        <CodeBlock
          code={`const window = Dimensions.get('window');
const screen = Dimensions.get('screen');`}
        />
        <Caption>
          screen on this device: {Math.round(Dimensions.get('screen').width)} ×{' '}
          {Math.round(Dimensions.get('screen').height)}pt
        </Caption>
      </DemoSection>
    </DemoScreen>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  stat: {
    flexBasis: '47%',
    flexGrow: 1,
    backgroundColor: palette.tintSoft,
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: palette.tint,
  },
  statLabel: {
    fontSize: 12,
    color: palette.textMuted,
  },
  track: {
    height: 24,
    backgroundColor: '#e2e8f0',
    borderRadius: 12,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: palette.tint,
    borderRadius: 12,
  },
});
