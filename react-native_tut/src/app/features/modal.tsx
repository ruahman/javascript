import { Stack } from 'expo-router';
import { useState } from 'react';
import { Button, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function ModalScreen() {
  const [slideVisible, setSlideVisible] = useState(false);
  const [fadeVisible, setFadeVisible] = useState(false);

  return (
    <DemoScreen intro="Modal presents content above the current view. Visibility is controlled with the visible prop, animationType picks slide/fade/none, and transparent lets you draw your own dimmed backdrop. onRequestClose handles the Android back button.">
      <Stack.Screen options={{ title: 'Modal' }} />

      <DemoSection
        title="Slide-up modal"
        description="A full-screen modal that slides in from the bottom.">
        <Button title="Open slide modal" onPress={() => setSlideVisible(true)} />
        <CodeBlock
          code={`<Modal visible={visible} animationType="slide"
       onRequestClose={() => setVisible(false)}>`}
        />
      </DemoSection>

      <DemoSection
        title="Transparent fade modal"
        description="transparent renders the modal over the screen so you can build a dimmed-backdrop dialog.">
        <Button title="Open dialog modal" onPress={() => setFadeVisible(true)} />
        <Caption>Tap the backdrop to dismiss.</Caption>
      </DemoSection>

      <Modal
        visible={slideVisible}
        animationType="slide"
        onRequestClose={() => setSlideVisible(false)}>
        <View style={styles.fullModal}>
          <Text style={styles.modalTitle}>Full-screen Modal</Text>
          <Text style={styles.modalBody}>
            This modal covers the entire screen and slid in from the bottom.
          </Text>
          <Button title="Close" onPress={() => setSlideVisible(false)} />
        </View>
      </Modal>

      <Modal
        visible={fadeVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setFadeVisible(false)}>
        <Pressable style={styles.backdrop} onPress={() => setFadeVisible(false)}>
          <Pressable style={styles.dialog} onPress={(e) => e.stopPropagation()}>
            <Text style={styles.modalTitle}>Dialog</Text>
            <Text style={styles.modalBody}>
              A transparent Modal with a custom dimmed backdrop and centered card.
            </Text>
            <Button title="Close" onPress={() => setFadeVisible(false)} />
          </Pressable>
        </Pressable>
      </Modal>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  fullModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    padding: 24,
    backgroundColor: palette.bg,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 32,
  },
  dialog: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    gap: 12,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: palette.text,
  },
  modalBody: {
    fontSize: 15,
    lineHeight: 22,
    color: palette.textMuted,
    textAlign: 'center',
  },
});
