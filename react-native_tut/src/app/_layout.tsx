import { Stack } from 'expo-router';

import { palette } from '@/constants/theme';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: palette.tint,
        headerTitleStyle: { color: palette.text },
        contentStyle: { backgroundColor: palette.bg },
      }}>
      <Stack.Screen name="index" options={{ title: 'React Native Features' }} />
    </Stack>
  );
}
