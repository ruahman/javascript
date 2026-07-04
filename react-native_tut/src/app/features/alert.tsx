import { Stack } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, Platform, StyleSheet, Text } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function AlertScreen() {
  const [lastChoice, setLastChoice] = useState('none yet');

  const simpleAlert = () => Alert.alert('Heads up', 'This is a native alert dialog.');

  const confirmAlert = () =>
    Alert.alert('Delete item?', 'This action cannot be undone.', [
      { text: 'Cancel', style: 'cancel', onPress: () => setLastChoice('Cancel') },
      { text: 'Delete', style: 'destructive', onPress: () => setLastChoice('Delete') },
    ]);

  const threeButton = () =>
    Alert.alert('Save changes?', 'You have unsaved edits.', [
      { text: 'Discard', style: 'destructive', onPress: () => setLastChoice('Discard') },
      { text: 'Keep editing', style: 'cancel', onPress: () => setLastChoice('Keep editing') },
      { text: 'Save', onPress: () => setLastChoice('Save') },
    ]);

  return (
    <DemoScreen intro="Alert.alert shows the platform's native dialog — not a JS-rendered lookalike. Buttons take a style ('default' | 'cancel' | 'destructive', styled natively on iOS) and an onPress callback. On web, Alert falls back to window.alert and only supports a single button.">
      <Stack.Screen options={{ title: 'Alert' }} />

      <DemoSection title="Simple alert">
        <Button title="Show alert" onPress={simpleAlert} />
        <CodeBlock code={`Alert.alert('Heads up', 'This is a native alert dialog.');`} />
      </DemoSection>

      <DemoSection title="Confirmation with styled buttons">
        <Button title="Delete something…" color={palette.danger} onPress={confirmAlert} />
        <CodeBlock
          code={`Alert.alert('Delete item?', 'This cannot be undone.', [
  { text: 'Cancel', style: 'cancel' },
  { text: 'Delete', style: 'destructive', onPress: doDelete },
]);`}
        />
      </DemoSection>

      <DemoSection title="Three buttons">
        <Button title="Close with unsaved changes" onPress={threeButton} />
        <Text style={styles.choice}>Last choice: {lastChoice}</Text>
        <Caption>
          {Platform.OS === 'web'
            ? 'You are on web — multi-button alerts degrade to window.alert.'
            : 'Alert.prompt (iOS only) additionally collects text input.'}
        </Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  choice: {
    fontSize: 14,
    color: palette.textMuted,
    textAlign: 'center',
  },
});
