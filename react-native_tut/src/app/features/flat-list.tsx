import { Stack } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { Caption, CodeBlock } from '@/components/demo';
import { palette } from '@/constants/theme';

type Row = { id: string; label: string };

const DATA: Row[] = Array.from({ length: 200 }, (_, i) => ({
  id: String(i),
  label: `Row ${i + 1}`,
}));

export default function FlatListScreen() {
  const [selected, setSelected] = useState<string | null>(null);

  const renderItem = useCallback(
    ({ item }: { item: Row }) => (
      <Pressable
        style={[styles.row, selected === item.id && styles.rowSelected]}
        onPress={() => setSelected(item.id)}>
        <Text style={styles.rowText}>{item.label}</Text>
        {selected === item.id && <Text style={styles.check}>✓</Text>}
      </Pressable>
    ),
    [selected]
  );

  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ title: 'FlatList' }} />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        extraData={selected}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.intro}>
              FlatList renders long lists lazily — only the rows near the viewport are mounted, so
              a 200-item list (like this one) stays fast. It takes a data array and a renderItem
              function instead of children. Tap a row to select it; extraData tells the list to
              re-render rows when outside state changes.
            </Text>
            <CodeBlock
              code={`<FlatList
  data={DATA}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Row item={item} />}
  extraData={selected}
/>`}
            />
            <Caption>
              Also supported: pull-to-refresh (onRefresh), infinite scroll (onEndReached),
              numColumns for grids, and horizontal mode.
            </Caption>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.bg,
  },
  content: {
    padding: 16,
  },
  header: {
    gap: 12,
    marginBottom: 16,
  },
  intro: {
    fontSize: 15,
    lineHeight: 22,
    color: palette.text,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.card,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  rowSelected: {
    backgroundColor: palette.tintSoft,
  },
  rowText: {
    fontSize: 15,
    color: palette.text,
  },
  check: {
    color: palette.tint,
    fontWeight: '700',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: palette.border,
  },
});
