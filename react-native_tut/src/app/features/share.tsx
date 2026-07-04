import { Stack } from 'expo-router';
import { useState } from 'react';
import { Button, Share, StyleSheet, Text } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function ShareScreen() {
  const [outcome, setOutcome] = useState('not shared yet');

  const shareMessage = async () => {
    try {
      const result = await Share.share({
        message: 'Check out React Native! https://reactnative.dev',
        title: 'React Native',
      });
      if (result.action === Share.sharedAction) {
        setOutcome(result.activityType ? `shared via ${result.activityType}` : 'shared');
      } else if (result.action === Share.dismissedAction) {
        setOutcome('dismissed (iOS only reports this)');
      }
    } catch (error) {
      setOutcome(`error: ${String(error)}`);
    }
  };

  return (
    <DemoScreen intro="Share.share opens the native share sheet so users can send content to any installed app — messages, mail, social apps, and so on. It resolves with whether the user shared or dismissed (iOS reports the chosen activity; Android reports less detail).">
      <Stack.Screen options={{ title: 'Share' }} />

      <DemoSection title="Share a message + URL">
        <Button title="Open share sheet" onPress={shareMessage} />
        <Text style={styles.outcome}>Result: {outcome}</Text>
        <CodeBlock
          code={`const result = await Share.share({
  message: 'Check out React Native! https://reactnative.dev',
  title: 'React Native',           // Android dialog title
  // url: 'https://…'              // iOS only
});

if (result.action === Share.sharedAction) { … }`}
        />
        <Caption>
          For sharing files (images, PDFs), use expo-sharing, which accepts local file URIs.
        </Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  outcome: {
    fontSize: 14,
    color: palette.textMuted,
    textAlign: 'center',
  },
});
