import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function KeyboardScreen() {
  const [visible, setVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', (e) => {
      setVisible(true);
      setKeyboardHeight(e.endCoordinates.height);
    });
    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      setVisible(false);
      setKeyboardHeight(0);
    });
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <DemoScreen intro="The Keyboard module lets you react to the software keyboard: listen for show/hide events (which include its size) and dismiss it programmatically. This complements KeyboardAvoidingView, which handles layout automatically.">
      <Stack.Screen options={{ title: 'Keyboard' }} />

      <DemoSection
        title="Keyboard events"
        description="Focus the input and watch the values update from keyboardDidShow / keyboardDidHide.">
        <TextInput style={styles.input} placeholder="Focus me to open the keyboard" />
        <View style={styles.statRow}>
          <Text style={styles.stat}>visible: {String(visible)}</Text>
          <Text style={styles.stat}>height: {Math.round(keyboardHeight)}pt</Text>
        </View>
        <CodeBlock
          code={`const sub = Keyboard.addListener('keyboardDidShow', (e) => {
  console.log(e.endCoordinates.height);
});
sub.remove(); // in cleanup`}
        />
      </DemoSection>

      <DemoSection
        title="Keyboard.dismiss()"
        description="Programmatically close the keyboard — commonly wired to a 'tap outside' handler.">
        <Button title="Dismiss keyboard" onPress={() => Keyboard.dismiss()} />
        <Caption>
          A common pattern: wrap the screen in TouchableWithoutFeedback onPress=Keyboard.dismiss,
          or set keyboardShouldPersistTaps on ScrollViews (this page's ScrollView uses
          'handled').
        </Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stat: {
    fontSize: 14,
    fontWeight: '600',
    color: palette.tint,
  },
});
