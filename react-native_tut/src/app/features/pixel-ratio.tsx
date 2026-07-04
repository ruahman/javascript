import { Stack } from 'expo-router';
import { PixelRatio, StyleSheet, Text, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function PixelRatioScreen() {
  const ratio = PixelRatio.get();
  const fontScale = PixelRatio.getFontScale();
  const layoutSize = 100;
  const pixelSize = PixelRatio.getPixelSizeForLayoutSize(layoutSize);

  return (
    <DemoScreen intro="React Native sizes everything in density-independent points, and PixelRatio tells you how those map to physical pixels on the current device. A ratio of 3 means one point is drawn with 3×3 physical pixels — this is why you ship @2x/@3x image assets.">
      <Stack.Screen options={{ title: 'PixelRatio' }} />

      <DemoSection title="This device">
        <View style={styles.grid}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{ratio}x</Text>
            <Text style={styles.statLabel}>PixelRatio.get()</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{fontScale}x</Text>
            <Text style={styles.statLabel}>getFontScale()</Text>
          </View>
        </View>
        <Caption>
          getFontScale reflects the user's OS text-size setting — multiply by it when you need
          absolute font pixel sizes.
        </Caption>
      </DemoSection>

      <DemoSection
        title="Points → pixels"
        description="getPixelSizeForLayoutSize converts a layout size in points to physical pixels.">
        <Text style={styles.body}>
          A {layoutSize}pt box on this device is {pixelSize}px wide.
        </Text>
        <CodeBlock
          code={`PixelRatio.get();                        // ${ratio}
PixelRatio.getPixelSizeForLayoutSize(100); // ${pixelSize}
PixelRatio.roundToNearestPixel(8.4);       // ${PixelRatio.roundToNearestPixel(8.4)}`}
        />
      </DemoSection>

      <DemoSection
        title="Why it matters for images"
        description="Bundle assets at multiple densities and RN picks the right one automatically based on the pixel ratio.">
        <CodeBlock
          code={`icon.png      // 1x  (48×48)
icon@2x.png   // 2x  (96×96)
icon@3x.png   // 3x  (144×144)

<Image source={require('./icon.png')} />  // auto-selects`}
        />
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    gap: 8,
  },
  stat: {
    flex: 1,
    backgroundColor: palette.tintSoft,
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: palette.tint,
  },
  statLabel: {
    fontSize: 12,
    color: palette.textMuted,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    color: palette.text,
  },
});
