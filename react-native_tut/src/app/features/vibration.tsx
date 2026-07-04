import { Stack } from 'expo-router';
import { Button, Platform, Vibration } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';

export default function VibrationScreen() {
  return (
    <DemoScreen intro="Vibration triggers the device's vibration motor. iOS ignores duration (always a fixed buzz); Android honors durations and patterns. Note: vibration does nothing in the iOS simulator — test on a real device. For rich haptics (light/medium/heavy taps), use expo-haptics instead.">
      <Stack.Screen options={{ title: 'Vibration' }} />

      <DemoSection title="One-shot vibration">
        <Button title="Vibrate" onPress={() => Vibration.vibrate()} />
        <CodeBlock code={`Vibration.vibrate();        // default buzz
Vibration.vibrate(500);     // 500ms (Android only)`} />
      </DemoSection>

      <DemoSection
        title="Patterns"
        description="An array of millisecond durations alternating wait/vibrate. On iOS only the gaps are respected (each buzz is fixed-length).">
        <Button
          title="Pattern: buzz-pause-buzz-pause-buzz"
          onPress={() => Vibration.vibrate(Platform.OS === 'android' ? [0, 300, 200, 300, 200, 600] : [0, 400, 400, 400])}
        />
        <Button title="Stop / cancel" onPress={() => Vibration.cancel()} />
        <CodeBlock
          code={`// Android: [wait, vibrate, wait, vibrate, …]
Vibration.vibrate([0, 300, 200, 300, 200, 600]);

Vibration.vibrate(pattern, true); // repeat until cancel()
Vibration.cancel();`}
        />
        <Caption>Android requires the VIBRATE permission — Expo includes it by default.</Caption>
      </DemoSection>
    </DemoScreen>
  );
}
