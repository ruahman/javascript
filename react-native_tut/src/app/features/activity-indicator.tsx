import { Stack } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';

import { CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function ActivityIndicatorScreen() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const simulateLoad = () => {
    setLoading(true);
    setResult('');
    setTimeout(() => {
      setLoading(false);
      setResult('Data loaded ✓');
    }, 2000);
  };

  return (
    <DemoScreen intro="ActivityIndicator renders the platform's native loading spinner. It has just two knobs — size ('small' | 'large') and color — and an animating prop to show or hide it. Use it anywhere the app is waiting on async work.">
      <Stack.Screen options={{ title: 'ActivityIndicator' }} />

      <DemoSection title="Sizes and colors">
        <View style={styles.row}>
          <ActivityIndicator />
          <ActivityIndicator size="large" />
          <ActivityIndicator size="large" color={palette.tint} />
          <ActivityIndicator size="large" color={palette.danger} />
        </View>
        <CodeBlock code={`<ActivityIndicator size="large" color="#2563eb" />`} />
      </DemoSection>

      <DemoSection
        title="Typical loading flow"
        description="Show the spinner while an async operation runs, then swap in the result.">
        <Button title="Load data (2s)" onPress={simulateLoad} disabled={loading} />
        <View style={styles.resultArea}>
          {loading ? (
            <ActivityIndicator size="large" color={palette.tint} />
          ) : (
            <Text style={styles.resultText}>{result || 'Press the button above'}</Text>
          )}
        </View>
        <CodeBlock
          code={`{loading
  ? <ActivityIndicator size="large" />
  : <Text>{result}</Text>}`}
        />
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
  },
  resultArea: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 15,
    color: palette.textMuted,
  },
});
