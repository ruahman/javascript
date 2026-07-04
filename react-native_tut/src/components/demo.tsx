import { PropsWithChildren } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import { palette } from '@/constants/theme';

type DemoScreenProps = PropsWithChildren<{
  /** One-paragraph explanation shown at the top of the page. */
  intro: string;
}>;

/** Scrollable page wrapper used by every feature screen. */
export function DemoScreen({ intro, children }: DemoScreenProps) {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled">
      <Text style={styles.intro}>{intro}</Text>
      {children}
    </ScrollView>
  );
}

type DemoSectionProps = PropsWithChildren<{
  title: string;
  /** Explanation of what this specific demo shows. */
  description?: string;
}>;

/** A titled card holding one live demo plus its explanation. */
export function DemoSection({ title, description, children }: DemoSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {description ? <Text style={styles.sectionDescription}>{description}</Text> : null}
      <View style={styles.sectionBody}>{children}</View>
    </View>
  );
}

/** Monospace block for short code snippets. */
export function CodeBlock({ code }: { code: string }) {
  return (
    <View style={styles.codeBlock}>
      <Text style={styles.codeText}>{code}</Text>
    </View>
  );
}

/** Small muted caption, handy under live demos. */
export function Caption({ children }: PropsWithChildren) {
  return <Text style={styles.caption}>{children}</Text>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.bg,
  },
  content: {
    padding: 16,
    gap: 16,
    paddingBottom: 48,
  },
  intro: {
    fontSize: 15,
    lineHeight: 22,
    color: palette.text,
  },
  section: {
    backgroundColor: palette.card,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.border,
    padding: 16,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: palette.text,
  },
  sectionDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: palette.textMuted,
  },
  sectionBody: {
    gap: 10,
  },
  codeBlock: {
    backgroundColor: palette.codeBg,
    borderRadius: 8,
    padding: 12,
  },
  codeText: {
    color: palette.codeText,
    fontFamily: Platform.select({ ios: 'Menlo', android: 'monospace', default: 'monospace' }),
    fontSize: 12,
    lineHeight: 18,
  },
  caption: {
    fontSize: 13,
    color: palette.textMuted,
    fontStyle: 'italic',
  },
});
