import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, Linking } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';

export default function LinkingScreen() {
  const [initialUrl, setInitialUrl] = useState<string | null>(null);

  useEffect(() => {
    Linking.getInitialURL().then(setInitialUrl);
  }, []);

  const open = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };

  return (
    <DemoScreen intro="Linking opens URLs in the system browser and other apps via URL schemes (https:, mailto:, tel:, sms:, geo:), opens your app's OS settings page, and receives incoming deep links into your app.">
      <Stack.Screen options={{ title: 'Linking' }} />

      <DemoSection title="Opening URLs" description="Each button hands a URL to the OS.">
        <Button title="Open reactnative.dev" onPress={() => open('https://reactnative.dev')} />
        <Button title="Compose an email" onPress={() => open('mailto:someone@example.com?subject=Hello')} />
        <Button title="Dial a number" onPress={() => open('tel:+15555550100')} />
        <CodeBlock
          code={`if (await Linking.canOpenURL(url)) {
  await Linking.openURL(url);
}`}
        />
      </DemoSection>

      <DemoSection title="App settings">
        <Button title="Open this app's settings" onPress={() => Linking.openSettings()} />
        <Caption>Useful after a user denies a permission you need.</Caption>
      </DemoSection>

      <DemoSection
        title="Incoming deep links"
        description="getInitialURL returns the link that launched the app; the 'url' event fires for links while running. Expo Router builds its entire navigation on top of this.">
        <Caption>Initial URL for this session: {initialUrl ?? 'none (opened normally)'}</Caption>
        <CodeBlock
          code={`const url = await Linking.getInitialURL();

const sub = Linking.addEventListener('url', ({ url }) => {
  // navigate based on url
});`}
        />
      </DemoSection>
    </DemoScreen>
  );
}
