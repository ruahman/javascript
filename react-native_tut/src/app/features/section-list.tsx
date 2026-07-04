import { Stack } from 'expo-router';
import { SectionList, StyleSheet, Text, View } from 'react-native';

import { Caption, CodeBlock } from '@/components/demo';
import { palette } from '@/constants/theme';

const SECTIONS = [
  { title: 'Fruits', data: ['Apple', 'Banana', 'Cherry', 'Dragonfruit'] },
  { title: 'Vegetables', data: ['Asparagus', 'Broccoli', 'Carrot'] },
  { title: 'Grains', data: ['Barley', 'Oats', 'Quinoa', 'Rice', 'Wheat'] },
];

export default function SectionListScreen() {
  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ title: 'SectionList' }} />
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item) => item}
        stickySectionHeadersEnabled
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.intro}>
              SectionList is FlatList's grouped sibling: data is an array of sections, each with a
              title and its own data array. It adds renderSectionHeader/Footer and sticky headers
              — scroll down and watch the headers pin to the top. The home screen of this app is
              also a SectionList.
            </Text>
            <CodeBlock
              code={`<SectionList
  sections={[{ title: 'Fruits', data: ['Apple', …] }]}
  keyExtractor={(item) => item}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => (
    <Text>{section.title}</Text>
  )}
/>`}
            />
            <Caption>stickySectionHeadersEnabled is on for this list.</Caption>
          </View>
        }
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowText}>{item}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
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
    paddingBottom: 48,
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
  sectionHeader: {
    fontSize: 14,
    fontWeight: '700',
    color: palette.tint,
    backgroundColor: palette.bg,
    paddingVertical: 8,
  },
  row: {
    backgroundColor: palette.card,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  rowText: {
    fontSize: 15,
    color: palette.text,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: palette.border,
  },
});
