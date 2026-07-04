import { Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function SwitchScreen() {
  const [enabled, setEnabled] = useState(false);
  const [wifi, setWifi] = useState(true);

  return (
    <DemoScreen intro="Switch renders the native boolean toggle. It is a controlled component: it does not flip itself — you must update state in onValueChange and pass it back via value, or the switch will snap back.">
      <Stack.Screen options={{ title: 'Switch' }} />

      <DemoSection
        title="Controlled Switch"
        description="value comes from state; onValueChange updates it.">
        <View style={styles.row}>
          <Text style={styles.label}>Feature is {enabled ? 'ON' : 'OFF'}</Text>
          <Switch value={enabled} onValueChange={setEnabled} />
        </View>
        <CodeBlock
          code={`const [enabled, setEnabled] = useState(false);

<Switch value={enabled} onValueChange={setEnabled} />`}
        />
      </DemoSection>

      <DemoSection
        title="Custom colors"
        description="trackColor styles the track per state, thumbColor styles the knob.">
        <View style={styles.row}>
          <Text style={styles.label}>Wi-Fi</Text>
          <Switch
            value={wifi}
            onValueChange={setWifi}
            trackColor={{ false: '#cbd5e1', true: '#86efac' }}
            thumbColor={wifi ? palette.success : '#f4f4f5'}
          />
        </View>
        <Caption>Exact rendering differs by platform — iOS ignores some color props.</Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  label: {
    fontSize: 16,
    color: palette.text,
  },
});
