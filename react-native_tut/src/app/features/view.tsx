import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function ViewScreen() {
  return (
    <DemoScreen intro="View is the most fundamental component in React Native. It maps directly to the native container view on each platform (UIView on iOS, android.view.View on Android, a div on web). Views support flexbox layout, styling, touch handling, and accessibility — nearly every screen you build is a tree of Views.">
      <Stack.Screen options={{ title: 'View' }} />

      <DemoSection
        title="Nesting Views"
        description="Views nest like divs. Here an outer View draws a border while inner Views render as colored boxes.">
        <View style={styles.outer}>
          <View style={[styles.box, { backgroundColor: '#60a5fa' }]} />
          <View style={[styles.box, { backgroundColor: '#34d399' }]} />
          <View style={[styles.box, { backgroundColor: '#f472b6' }]} />
        </View>
        <CodeBlock
          code={`<View style={styles.outer}>
  <View style={styles.box} />
  <View style={styles.box} />
  <View style={styles.box} />
</View>`}
        />
      </DemoSection>

      <DemoSection
        title="Borders, radius, and shadow"
        description="Views handle backgrounds, borders, rounded corners, and shadows (boxShadow works cross-platform since RN 0.76; elevation is the older Android prop).">
        <View style={styles.fancyCard}>
          <Text style={styles.fancyText}>A styled View</Text>
        </View>
        <CodeBlock
          code={`{
  borderRadius: 16,
  borderWidth: 2,
  borderColor: '#2563eb',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
}`}
        />
      </DemoSection>

      <DemoSection
        title="Views are not text containers"
        description="Unlike HTML, raw strings must be wrapped in a Text component — putting a bare string inside a View throws an error. This is the number one beginner gotcha.">
        <Caption>{'<View>hello</View>  ❌ crashes'}</Caption>
        <Caption>{'<View><Text>hello</Text></View>  ✅ works'}</Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  outer: {
    flexDirection: 'row',
    gap: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 8,
  },
  box: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  fancyCard: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: palette.tint,
    backgroundColor: palette.tintSoft,
    padding: 20,
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
  fancyText: {
    color: palette.tint,
    fontWeight: '600',
  },
});
