import { Stack } from 'expo-router';
import { useRef, useState } from 'react';
import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function PanResponderScreen() {
  const pan = useRef(new Animated.ValueXY()).current;
  const [dragging, setDragging] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setDragging(true);
        pan.extractOffset();
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        setDragging(false);
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
        pan.flattenOffset();
        pan.setValue({ x: 0, y: 0 });
      },
    })
  ).current;

  return (
    <DemoScreen intro="PanResponder is the core gesture system: it negotiates which component owns a touch and streams move events to you. Combined with Animated.ValueXY it powers draggable elements. It runs on the JS thread — for production-grade gestures most apps now use react-native-gesture-handler + reanimated, but PanResponder needs no extra setup.">
      <Stack.Screen options={{ title: 'PanResponder' }} />

      <DemoSection
        title="Drag the circle"
        description="It follows your finger and springs back to the center on release.">
        <View style={styles.arena}>
          <Animated.View
            {...panResponder.panHandlers}
            style={[
              styles.ball,
              dragging && styles.ballActive,
              { transform: pan.getTranslateTransform() },
            ]}>
            <Text style={styles.ballText}>{dragging ? '✊' : '✋'}</Text>
          </Animated.View>
        </View>
        <Caption>{dragging ? 'Dragging…' : 'Idle — grab the circle'}</Caption>
        <CodeBlock
          code={`const pan = useRef(new Animated.ValueXY()).current;

const responder = PanResponder.create({
  onStartShouldSetPanResponder: () => true,
  onPanResponderMove: Animated.event(
    [null, { dx: pan.x, dy: pan.y }],
    { useNativeDriver: false },
  ),
  onPanResponderRelease: () =>
    Animated.spring(pan, { toValue: { x: 0, y: 0 },
      useNativeDriver: false }).start(),
});

<Animated.View {...responder.panHandlers}
  style={{ transform: pan.getTranslateTransform() }} />`}
        />
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  arena: {
    height: 240,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  ball: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: palette.tint,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ballActive: {
    backgroundColor: '#1e40af',
  },
  ballText: {
    fontSize: 26,
  },
});
