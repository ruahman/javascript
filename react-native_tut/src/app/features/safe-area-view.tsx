import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function SafeAreaScreen() {
  const insets = useSafeAreaInsets();

  return (
    <DemoScreen intro="Safe areas are the regions of the screen not covered by notches, the Dynamic Island, the home indicator, or system bars. The react-native-safe-area-context library (bundled with Expo) provides SafeAreaView and the useSafeAreaInsets hook to keep content out of those zones. The core RN SafeAreaView is iOS-only and deprecated in favor of this library.">
      <Stack.Screen options={{ title: 'Safe Areas' }} />

      <DemoSection
        title="Live insets on this device"
        description="useSafeAreaInsets returns the pixel size of each unsafe edge. On a notched iPhone, top is ~59 and bottom ~34; on devices without a notch they can be 0.">
        <View style={styles.insetGrid}>
          {(['top', 'bottom', 'left', 'right'] as const).map((edge) => (
            <View key={edge} style={styles.insetCell}>
              <Text style={styles.insetValue}>{Math.round(insets[edge])}</Text>
              <Text style={styles.insetLabel}>{edge}</Text>
            </View>
          ))}
        </View>
        <CodeBlock
          code={`import { useSafeAreaInsets } from 'react-native-safe-area-context';

const insets = useSafeAreaInsets();
<View style={{ paddingTop: insets.top }} />`}
        />
      </DemoSection>

      <DemoSection
        title="SafeAreaView component"
        description="Wrap a screen in SafeAreaView to pad all safe edges automatically.">
        <CodeBlock
          code={`import { SafeAreaView } from 'react-native-safe-area-context';

<SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
  {/* screen content */}
</SafeAreaView>`}
        />
        <Caption>
          This page shows insets as 0 for the top because the navigation header already consumes
          the safe area — headers from expo-router handle it for you.
        </Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  insetGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  insetCell: {
    alignItems: 'center',
    backgroundColor: palette.tintSoft,
    borderRadius: 10,
    paddingVertical: 12,
    flex: 1,
    marginHorizontal: 4,
  },
  insetValue: {
    fontSize: 22,
    fontWeight: '700',
    color: palette.tint,
  },
  insetLabel: {
    fontSize: 12,
    color: palette.textMuted,
  },
});
