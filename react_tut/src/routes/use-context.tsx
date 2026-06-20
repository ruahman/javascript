import { createContext, useContext, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-context')({
  component: UseContextPage,
})

type Theme = 'dark' | 'light' | 'ocean'

const themes: Record<Theme, { bg: string; fg: string; accent: string }> = {
  dark:  { bg: '#1e293b', fg: '#e2e8f0', accent: '#3b82f6' },
  light: { bg: '#f8fafc', fg: '#0f172a', accent: '#2563eb' },
  ocean: { bg: '#0c4a6e', fg: '#e0f2fe', accent: '#38bdf8' },
}

interface ThemeCtx { theme: Theme; setTheme: (t: Theme) => void }
const ThemeContext = createContext<ThemeCtx>({ theme: 'dark', setTheme: () => {} })

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div className="btn-row">
      {(Object.keys(themes) as Theme[]).map(t => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          style={{ background: themes[t].accent, outline: theme === t ? '2px solid white' : 'none' }}
        >
          {t}
        </button>
      ))}
    </div>
  )
}

function ThemedCard() {
  const { theme } = useContext(ThemeContext)
  const t = themes[theme]
  return (
    <div style={{ background: t.bg, color: t.fg, border: `1px solid ${t.accent}`, borderRadius: 12, padding: '1.5rem' }}>
      <h2 style={{ color: t.accent }}>Themed Card</h2>
      <p style={{ color: t.fg, opacity: 0.8 }}>
        This card reads <code style={{ background: 'rgba(0,0,0,0.3)', color: t.accent }}>theme</code> from
        context — no props needed, however deep it sits in the tree.
      </p>
      <span style={{ display: 'inline-block', marginTop: '0.5rem', background: t.accent, color: '#fff', padding: '0.2rem 0.6rem', borderRadius: 6 }}>
        Active theme: <strong>{theme}</strong>
      </span>
    </div>
  )
}

function UserBadge() {
  const { theme } = useContext(ThemeContext)
  const t = themes[theme]
  return (
    <div className="card">
      <h2>Nested consumer</h2>
      <p>This component is a sibling of ThemedCard — both share the same context without going through props.</p>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: t.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>U</div>
        <div>
          <div style={{ fontWeight: 600 }}>User Name</div>
          <div className="muted">theme: {theme}</div>
        </div>
      </div>
    </div>
  )
}

function UseContextPage() {
  return (
    <>
      <h1>useContext</h1>
      <p>
        <code>createContext</code> + <code>useContext</code> lets any descendant read
        shared state without prop-drilling. The Provider sits high in the tree;
        consumers anywhere below subscribe to it.
      </p>
      <ThemeProvider>
        <div className="card">
          <h2>Theme picker</h2>
          <p>Select a theme — all consumers below update instantly.</p>
          <ThemeSwitcher />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <ThemedCard />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <UserBadge />
        </div>
      </ThemeProvider>
    </>
  )
}
