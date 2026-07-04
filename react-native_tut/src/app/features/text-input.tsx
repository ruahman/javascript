import { Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

import { Caption, CodeBlock, DemoScreen, DemoSection } from '@/components/demo';
import { palette } from '@/constants/theme';

export default function TextInputScreen() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <DemoScreen intro="TextInput is the component for keyboard input. It is typically used as a controlled component: value comes from state and onChangeText updates it. Props like keyboardType, secureTextEntry, and multiline adapt it for emails, passwords, and long-form text.">
      <Stack.Screen options={{ title: 'TextInput' }} />

      <DemoSection
        title="Controlled input"
        description="State drives the value; onChangeText updates state on every keystroke. onSubmitEditing fires when the return key is pressed.">
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Type your name…"
          returnKeyType="done"
          onSubmitEditing={() => setSubmitted(name)}
        />
        <Text style={styles.echo}>
          Live value: <Text style={styles.echoValue}>{name || '(empty)'}</Text>
        </Text>
        {submitted ? <Caption>Submitted: {submitted}</Caption> : null}
        <CodeBlock
          code={`const [name, setName] = useState('');

<TextInput value={name} onChangeText={setName}
           onSubmitEditing={handleSubmit} />`}
        />
      </DemoSection>

      <DemoSection
        title="Keyboard types & secure entry"
        description="keyboardType changes the keyboard layout; secureTextEntry masks the text for passwords.">
        <TextInput style={styles.input} placeholder="email-address" keyboardType="email-address" autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="numeric" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="password" secureTextEntry />
      </DemoSection>

      <DemoSection
        title="Multiline"
        description="multiline turns the input into a growing text area.">
        <TextInput
          style={[styles.input, styles.multiline]}
          value={notes}
          onChangeText={setNotes}
          placeholder="Write a few lines…"
          multiline
        />
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
    color: palette.text,
  },
  multiline: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  echo: {
    fontSize: 14,
    color: palette.textMuted,
  },
  echoValue: {
    fontWeight: '600',
    color: palette.text,
  },
});
