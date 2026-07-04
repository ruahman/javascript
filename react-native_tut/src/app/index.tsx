import { Link } from 'expo-router';
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';

import { featureSections } from '@/constants/features';
import { palette } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <SectionList
      style={styles.list}
      contentContainerStyle={styles.content}
      sections={featureSections}
      keyExtractor={(item) => item.slug}
      stickySectionHeadersEnabled={false}
      ListHeaderComponent={
        <Text style={styles.headerText}>
          Each page below demonstrates one React Native feature with live examples and an
          explanation of how it works. This home screen is itself a SectionList.
        </Text>
      }
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
      renderItem={({ item }) => (
        <Link href={`/features/${item.slug}`} asChild>
          <Pressable style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}>
            <View style={styles.rowText}>
              <Text style={styles.rowTitle}>{item.title}</Text>
              <Text style={styles.rowSubtitle}>{item.subtitle}</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: palette.bg,
  },
  content: {
    padding: 16,
    paddingBottom: 48,
  },
  headerText: {
    fontSize: 14,
    lineHeight: 20,
    color: palette.textMuted,
    marginBottom: 8,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: palette.textMuted,
    marginTop: 20,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.card,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.border,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  rowPressed: {
    backgroundColor: palette.tintSoft,
  },
  rowText: {
    flex: 1,
    gap: 2,
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: palette.text,
  },
  rowSubtitle: {
    fontSize: 13,
    color: palette.textMuted,
  },
  chevron: {
    fontSize: 22,
    color: palette.textMuted,
    marginLeft: 8,
  },
});
