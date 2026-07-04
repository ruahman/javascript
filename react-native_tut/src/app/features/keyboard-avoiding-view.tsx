import { Stack } from 'expo-router';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

import { Caption, CodeBlock } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function KeyboardAvoidingViewScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}>
      <Stack.Screen options={{ title: 'KeyboardAvoidingView' }} />
      <View style={styles.top}>
        <Text style={styles.intro}>
          KeyboardAvoidingView adjusts its layout when the software keyboard appears, so inputs
          near the bottom of the screen are not covered. behavior picks the strategy: padding
          (adds bottom padding — best on iOS), height (shrinks the view — Android), or position
          (moves the view).
        </Text>
        <CodeBlock
          code={`<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  keyboardVerticalOffset={100}
  style={{ flex: 1 }}>
  {/* content with inputs near the bottom */}
</KeyboardAvoidingView>`}
        />
        <Caption>
          keyboardVerticalOffset accounts for headers above the view — here the navigation header.
          Android often handles this natively via windowSoftInputMode, so the effect is most
          visible on iOS.
        </Caption>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.label}>This input sits at the bottom — tap it:</Text>
        <TextInput style={styles.input} placeholder="Focus me and watch the layout adjust" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.bg,
    padding: 16,
  },
  top: {
    flex: 1,
    gap: 12,
  },
  intro: {
    fontSize: 15,
    lineHeight: 22,
    color: palette.text,
  },
  bottom: {
    gap: 8,
    paddingBottom: 16,
  },
  label: {
    fontSize: 13,
    color: palette.textMuted,
  },
  input: {
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
