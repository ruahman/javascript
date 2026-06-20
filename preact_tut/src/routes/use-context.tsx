import { createFileRoute } from '@tanstack/react-router'
import { createContext } from 'preact'
import { useContext, useState } from 'preact/hooks'

export const Route = createFileRoute('/use-context')({
  component: UseContextPage,
})

type Theme = { bg: string; text: string; border: string; name: string }

const themes: Record<string, Theme> = {
  light:  { bg: '#ffffff', text: '#1a1a1a', border: '#e5e7eb', name: 'Light' },
  dark:   { bg: '#1e1b4b', text: '#e2e8f0', border: '#4338ca', name: 'Dark' },
  green:  { bg: '#f0fdf4', text: '#14532d', border: '#86efac', name: 'Green' },
  sunset: { bg: '#fff7ed', text: '#7c2d12', border: '#fb923c', name: 'Sunset' },
}

type ThemeCtx = { theme: Theme; setThemeName: (n: string) => void }

const ThemeContext = createContext<ThemeCtx>({
  theme: themes.light,
  setThemeName: () => {},
})

function ThemedCard() {
  const { theme } = useContext(ThemeContext)
  return (
    <div style={{
      background: theme.bg, color: theme.text,
      border: `2px solid ${theme.border}`,
      borderRadius: 10, padding: '1rem', marginBottom: '1rem',
    }}>
      <strong>ThemedCard</strong> reads from context — theme: <em>{theme.name}</em>
    </div>
  )
}

function ThemePicker() {
  const { theme, setThemeName } = useContext(ThemeContext)
  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {Object.entries(themes).map(([key, t]) => (
        <button
          key={key}
          onClick={() => setThemeName(key)}
          style={{
            background: t.bg, color: t.text, border: `2px solid ${t.border}`,
            fontWeight: theme.name === t.name ? 700 : 400,
          }}
        >
          {t.name}
        </button>
      ))}
    </div>
  )
}

function UseContextPage() {
  const [themeName, setThemeName] = useState('light')
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>useContext</h1>
      <p style={{ color: '#6b7280' }}>
        <code>createContext</code> creates a context object. <code>Provider</code> injects a value into
        the tree. Any descendant can read it with <code>useContext</code> — no prop drilling needed.
      </p>
      <ThemeContext.Provider value={{ theme: themes[themeName], setThemeName }}>
        <ThemedCard />
        <ThemePicker />
      </ThemeContext.Provider>
    </div>
  )
}
