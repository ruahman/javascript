import { Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View, type ViewStyle } from 'react-native';
import Slider from '@react-native-community/slider';

import { CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function TransformsScreen() {
  const [rotate, setRotate] = useState(15);
  const [scale, setScale] = useState(1);

  return (
    <DemoScreen intro="The transform style applies visual transformations — rotate, scale, translate, skew — without affecting layout: the element still occupies its original space. Transforms take an array and apply in order, which matters (rotate-then-translate differs from translate-then-rotate).">
      <Stack.Screen options={{ title: 'Transforms' }} />

      <DemoSection title="Interactive rotate + scale" description="Drag the sliders.">
        <View style={styles.stage}>
          <View
            style={[
              styles.subject,
              { transform: [{ rotate: `${rotate}deg` }, { scale }] },
            ]}>
            <Text style={styles.subjectText}>RN</Text>
          </View>
        </View>
        <Text style={styles.sliderLabel}>rotate: {Math.round(rotate)}deg</Text>
        <Slider minimumValue={-180} maximumValue={180} value={rotate} onValueChange={setRotate} />
        <Text style={styles.sliderLabel}>scale: {scale.toFixed(2)}</Text>
        <Slider minimumValue={0.25} maximumValue={2} value={scale} onValueChange={setScale} />
        <CodeBlock
          code={`transform: [
  { rotate: '45deg' },
  { scale: 1.5 },
]`}
        />
      </DemoSection>

      <DemoSection
        title="The transform gallery"
        description="Each box has one transform applied; note none of them affect the position of their neighbors.">
        <View style={styles.gallery}>
          <GalleryBox label="none" transform={[]} />
          <GalleryBox label="rotate" transform={[{ rotate: '30deg' }]} />
          <GalleryBox label="scaleX" transform={[{ scaleX: 1.4 }]} />
          <GalleryBox label="skewX" transform={[{ skewX: '20deg' }]} />
          <GalleryBox label="translateY" transform={[{ translateY: 8 }]} />
        </View>
      </DemoSection>
    </DemoScreen>
  );
}

function GalleryBox({ label, transform }: { label: string; transform: ViewStyle['transform'] }) {
  return (
    <View style={styles.galleryItem}>
      <View style={[styles.galleryBox, { transform }]} />
      <Text style={styles.galleryLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  stage: {
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subject: {
    width: 80,
    height: 80,
    borderRadius: 14,
    backgroundColor: palette.tint,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
  },
  sliderLabel: {
    fontSize: 13,
    color: palette.textMuted,
  },
  gallery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  galleryItem: {
    alignItems: 'center',
    gap: 10,
  },
  galleryBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#34d399',
  },
  galleryLabel: {
    fontSize: 11,
    color: palette.textMuted,
  },
});
