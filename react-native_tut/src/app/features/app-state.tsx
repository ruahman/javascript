import { Stack } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { AppState, type AppStateStatus, StyleSheet, Text, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function AppStateScreen() {
  const [current, setCurrent] = useState<AppStateStatus>(AppState.currentState);
  const [backgroundCount, setBackgroundCount] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const previous = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (next) => {
      setCurrent(next);
      setLog((entries) => [`${previous.current} → ${next}`, ...entries].slice(0, 6));
      if (previous.current.match(/active/) && next === 'background') {
        setBackgroundCount((n) => n + 1);
      }
      previous.current = next;
    });
    return () => subscription.remove();
  }, []);

  return (
    <DemoScreen intro="AppState tells you whether the app is in the foreground ('active'), not focused ('inactive' — iOS only, e.g. during the app switcher), or in the 'background'. Subscribe to the change event to pause work, refresh data on return, or save state. Try it: background this app and come back.">
      <Stack.Screen options={{ title: 'AppState' }} />

      <DemoSection title="Live state">
        <View style={styles.stateRow}>
          <View style={[styles.dot, current === 'active' ? styles.dotActive : styles.dotIdle]} />
          <Text style={styles.stateText}>{current}</Text>
        </View>
        <Caption>Times sent to background this visit: {backgroundCount}</Caption>
        <CodeBlock
          code={`useEffect(() => {
  const sub = AppState.addEventListener('change', (next) => {
    if (next === 'active') refetchData();
  });
  return () => sub.remove();
}, []);`}
        />
      </DemoSection>

      <DemoSection
        title="Transition log"
        description="Most recent first. Switch apps or pull down the notification shade to generate events.">
        {log.length === 0 ? (
          <Caption>No transitions yet.</Caption>
        ) : (
          log.map((entry, i) => (
            <Text key={i} style={styles.logEntry}>
              {entry}
            </Text>
          ))
        )}
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  stateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  dotActive: {
    backgroundColor: palette.success,
  },
  dotIdle: {
    backgroundColor: '#f59e0b',
  },
  stateText: {
    fontSize: 18,
    fontWeight: '700',
    color: palette.text,
  },
  logEntry: {
    fontSize: 14,
    color: palette.textMuted,
    fontVariant: ['tabular-nums'],
  },
});
