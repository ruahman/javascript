import { Stack } from 'expo-router';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';

const REMOTE_URI = 'https://reactnative.dev/img/tiny_logo.png';

export default function ImageScreen() {
  return (
    <DemoScreen intro="Image displays local (bundled) and remote images. Local images use require() so the bundler can include them and infer their size; remote images need an explicit width and height because RN cannot know their size before loading. resizeMode controls how the image fills its frame.">
      <Stack.Screen options={{ title: 'Image' }} />

      <DemoSection
        title="Local vs remote sources"
        description="Left: a bundled asset via require(). Right: a network image via { uri } — note it must be given explicit dimensions.">
        <View style={styles.row}>
          <Image source={require('@/assets/images/react-logo.png')} style={styles.logo} />
          <Image source={{ uri: REMOTE_URI }} style={styles.logo} />
        </View>
        <CodeBlock
          code={`<Image source={require('./assets/react-logo.png')} />
<Image source={{ uri: 'https://…/tiny_logo.png' }}
       style={{ width: 64, height: 64 }} />`}
        />
      </DemoSection>

      <DemoSection
        title="resizeMode"
        description="The same image rendered with cover (fills, crops), contain (fits, letterboxes), and stretch (distorts).">
        <View style={styles.row}>
          {(['cover', 'contain', 'stretch'] as const).map((mode) => (
            <View key={mode} style={styles.modeItem}>
              <Image source={{ uri: REMOTE_URI }} style={styles.modeImage} resizeMode={mode} />
              <Text style={styles.modeLabel}>{mode}</Text>
            </View>
          ))}
        </View>
      </DemoSection>

      <DemoSection
        title="ImageBackground"
        description="Renders children on top of an image — the RN equivalent of CSS background-image.">
        <ImageBackground
          source={require('@/assets/images/react-logo.png')}
          style={styles.background}
          imageStyle={styles.backgroundImage}>
          <Text style={styles.backgroundText}>Text over an image</Text>
        </ImageBackground>
        <Caption>
          For production apps, expo-image offers caching, blurhash placeholders, and better
          performance than the core Image.
        </Caption>
      </DemoSection>
    </DemoScreen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  logo: {
    width: 64,
    height: 64,
  },
  modeItem: {
    alignItems: 'center',
    gap: 4,
  },
  modeImage: {
    width: 80,
    height: 48,
    borderRadius: 6,
    backgroundColor: '#e2e8f0',
  },
  modeLabel: {
    fontSize: 12,
    color: '#64748b',
  },
  background: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    overflow: 'hidden',
  },
  backgroundImage: {
    opacity: 0.3,
  },
  backgroundText: {
    fontSize: 18,
    fontWeight: '700',
  },
});
