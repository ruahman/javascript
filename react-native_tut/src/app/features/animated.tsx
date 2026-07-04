import { Stack } from 'expo-router';
import { useRef } from 'react';
import { Animated, Button, Easing, StyleSheet, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function AnimatedScreen() {
  const opacity = useRef(new Animated.Value(1)).current;
  const slideX = useRef(new Animated.Value(0)).current;
  const bounce = useRef(new Animated.Value(0)).current;

  const fade = () => {
    Animated.sequence([
      Animated.timing(opacity, { toValue: 0, duration: 500, useNativeDriver: true }),
      Animated.timing(opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
    ]).start();
  };

  const slide = () => {
    Animated.timing(slideX, {
      toValue: 1,
      duration: 800,
      easing: Easing.inOut(Easing.cubic),
      useNativeDriver: true,
    }).start(() => slideX.setValue(0));
  };

  const spring = () => {
    bounce.setValue(0);
    Animated.spring(bounce, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <DemoScreen intro="Animated is React Native's built-in animation API. You create Animated.Value objects, drive them with timing/spring/decay, and bind them to the style of Animated.View (or Text/Image/ScrollView). useNativeDriver: true runs the animation on the UI thread so it stays smooth even if JS is busy. For complex gesture-driven animation, the community standard is react-native-reanimated.">
      <Stack.Screen options={{ title: 'Animated' }} />

      <DemoSection title="Timing: fade out and in" description="Two timing animations run in sequence.">
        <View style={styles.stage}>
          <Animated.View style={[styles.box, { opacity }]} />
        </View>
        <Button title="Fade" onPress={fade} />
        <CodeBlock
          code={`const opacity = useRef(new Animated.Value(1)).current;

Animated.timing(opacity, {
  toValue: 0, duration: 500, useNativeDriver: true,
}).start();

<Animated.View style={{ opacity }} />`}
        />
      </DemoSection>

      <DemoSection
        title="Interpolation: slide + rotate"
        description="One Animated.Value from 0→1 interpolates into both a translation and a rotation.">
        <View style={styles.stage}>
          <Animated.View
            style={[
              styles.box,
              styles.boxGreen,
              {
                transform: [
                  { translateX: slideX.interpolate({ inputRange: [0, 1], outputRange: [0, 180] }) },
                  { rotate: slideX.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) },
                ],
              },
            ]}
          />
        </View>
        <Button title="Slide + rotate" onPress={slide} />
        <CodeBlock
          code={`translateX: value.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 180],
})`}
        />
      </DemoSection>

      <DemoSection
        title="Spring physics"
        description="spring animates with physical friction/tension instead of a fixed duration.">
        <View style={styles.stage}>
          <Animated.View
            style={[
              styles.box,
              styles.boxPink,
              { transform: [{ scale: bounce.interpolate({ inputRange: [0, 1], outputRange: [0.3, 1] }) }] },
            ]}
          />
        </View>
        <Button title="Spring in" onPress={spring} />
        <Caption>Also available: Animated.parallel, stagger, loop, and Animated.event for scroll/gesture binding.</Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  stage: {
    height: 90,
    justifyContent: 'center',
  },
  box: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: palette.tint,
  },
  boxGreen: {
    backgroundColor: '#34d399',
  },
  boxPink: {
    backgroundColor: '#f472b6',
    alignSelf: 'center',
  },
});
