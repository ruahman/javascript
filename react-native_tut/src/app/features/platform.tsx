import { Stack } from 'expo-router';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function PlatformScreen() {
  return (
    <DemoScreen intro="Platform lets one codebase branch per platform. Platform.OS is 'ios' | 'android' | 'web', Platform.select picks a value per platform, and platform-specific file extensions (Component.ios.tsx / Component.android.tsx / Component.web.tsx) swap whole modules at build time.">
      <Stack.Screen options={{ title: 'Platform' }} />

      <DemoSection title="This device">
        <View style={styles.grid}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{Platform.OS}</Text>
            <Text style={styles.statLabel}>Platform.OS</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{String(Platform.Version ?? 'n/a')}</Text>
            <Text style={styles.statLabel}>Platform.Version</Text>
          </View>
        </View>
        <Caption>
          Platform.Version is the iOS version string or the Android API level number.
        </Caption>
      </DemoSection>

      <DemoSection
        title="Platform.select"
        description="Returns the value whose key matches the current platform. The box below picks its color this way — it renders differently on iOS, Android, and web.">
        <View
          style={[
            styles.selectBox,
            {
              backgroundColor: Platform.select({
                ios: '#60a5fa',
                android: '#34d399',
                default: '#f472b6',
              }),
            },
          ]}>
          <Text style={styles.selectText}>
            {Platform.select({ ios: 'Blue on iOS', android: 'Green on Android', default: 'Pink elsewhere' })}
          </Text>
        </View>
        <CodeBlock
          code={`const color = Platform.select({
  ios: '#60a5fa',
  android: '#34d399',
  default: '#f472b6',
});`}
        />
      </DemoSection>

      <DemoSection
        title="Platform-specific files"
        description="Name files with a platform suffix and the bundler resolves the right one — no runtime check needed.">
        <CodeBlock
          code={`Button.ios.tsx      // used on iOS
Button.android.tsx  // used on Android
Button.web.tsx      // used on web

import Button from './Button'; // resolves per platform`}
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
    fontSize: 18,
    fontWeight: '700',
    color: palette.tint,
  },
  statLabel: {
    fontSize: 12,
    color: palette.textMuted,
  },
  selectBox: {
    borderRadius: 10,
    padding: 18,
    alignItems: 'center',
  },
  selectText: {
    color: '#fff',
    fontWeight: '700',
  },
});
