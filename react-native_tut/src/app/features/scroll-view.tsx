import { Stack } from 'expo-router';
import { useCallback, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function ScrollViewScreen() {
  const [refreshCount, setRefreshCount] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshCount((n) => n + 1);
      setRefreshing(false);
    }, 1200);
  }, []);

  return (
    <DemoScreen intro="ScrollView is a scrolling container that renders ALL of its children at once — perfect for small amounts of content like forms and detail pages. For long lists use FlatList, which renders lazily. This whole page is a ScrollView; below are nested horizontal and pull-to-refresh examples.">
      <Stack.Screen options={{ title: 'ScrollView' }} />

      <DemoSection
        title="Horizontal scrolling"
        description="Set horizontal to scroll sideways — the basis for carousels and chip rows.">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
          {Array.from({ length: 12 }, (_, i) => (
            <View key={i} style={styles.chip}>
              <Text style={styles.chipText}>Item {i + 1}</Text>
            </View>
          ))}
        </ScrollView>
        <CodeBlock code={`<ScrollView horizontal showsHorizontalScrollIndicator={false}>`} />
      </DemoSection>

      <DemoSection
        title="Pull to refresh (RefreshControl)"
        description="Pull down inside the box below. RefreshControl shows the native spinner while refreshing is true.">
        <ScrollView
          style={styles.refreshBox}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
          <Text style={styles.refreshText}>
            {refreshing ? 'Refreshing…' : `Pull down to refresh — refreshed ${refreshCount} times`}
          </Text>
        </ScrollView>
        <CodeBlock
          code={`<ScrollView refreshControl={
  <RefreshControl refreshing={refreshing}
                  onRefresh={onRefresh} />
}>`}
        />
        <Caption>
          ScrollView needs a bounded height to scroll; here the inner one is fixed at 140pt.
        </Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  chipRow: {
    gap: 8,
  },
  chip: {
    backgroundColor: palette.tintSoft,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  chipText: {
    color: palette.tint,
    fontWeight: '600',
  },
  refreshBox: {
    height: 140,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  refreshText: {
    padding: 16,
    color: palette.textMuted,
  },
});
