import { useState, useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/custom-hooks')({
  component: CustomHooksPage,
})

// ── custom hook: useLocalStorage ──────────────────────────────────────────────
function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? (JSON.parse(stored) as T) : initial
    } catch {
      return initial
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}

// ── custom hook: useDebounce ──────────────────────────────────────────────────
function useDebounce<T>(value: T, delay = 400): T {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(t)
  }, [value, delay])
  return debounced
}

// ── custom hook: useToggle ────────────────────────────────────────────────────
function useToggle(initial = false): [boolean, () => void] {
  const [on, setOn] = useState(initial)
  return [on, () => setOn(v => !v)]
}

// ── custom hook: useWindowSize ────────────────────────────────────────────────
function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })
  useEffect(() => {
    const handler = () => setSize({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return size
}

// ── demos ─────────────────────────────────────────────────────────────────────
function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('demo-name', '')
  const [count, setCount] = useLocalStorage('demo-count', 0)
  return (
    <div className="card">
      <h2>useLocalStorage</h2>
      <p>Values survive a page refresh — try it! The hook reads from <code>localStorage</code> on mount and syncs writes back.</p>
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name (persisted)" style={{ flex: 1 }} />
      </div>
      <div className="btn-row">
        <button onClick={() => setCount(c => c - 1)}>−</button>
        <span className="big-number" style={{ fontSize: '1.5rem' }}>{count}</span>
        <button onClick={() => setCount(c => c + 1)}>＋</button>
        <button className="secondary" onClick={() => { setName(''); setCount(0) }}>Clear storage</button>
      </div>
      {name && <p style={{ marginTop: '0.75rem' }}>Hello, <span className="highlight">{name}</span>! Count: {count}</p>}
    </div>
  )
}

function DebounceDemo() {
  const [raw, setRaw] = useState('')
  const debounced = useDebounce(raw, 500)
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    if (debounced) setHistory(h => [debounced, ...h].slice(0, 5))
  }, [debounced])

  return (
    <div className="card">
      <h2>useDebounce</h2>
      <p>The debounced value updates 500 ms after you stop typing — useful for search inputs that trigger API calls.</p>
      <input value={raw} onChange={e => setRaw(e.target.value)} placeholder="Type quickly…" style={{ width: '100%', marginBottom: '0.75rem' }} />
      <p>Raw: <code>{raw || '—'}</code></p>
      <p>Debounced: <span className="highlight">{debounced || '—'}</span></p>
      {history.length > 0 && (
        <div style={{ marginTop: '0.75rem' }}>
          <p className="muted">Last debounced values:</p>
          <ul className="item-list">{history.map((h, i) => <li key={i}>{h}</li>)}</ul>
        </div>
      )}
    </div>
  )
}

function ToggleDemo() {
  const [open, toggle] = useToggle(false)
  const [dark, toggleDark] = useToggle(true)
  return (
    <div className="card">
      <h2>useToggle</h2>
      <p>A simple hook that encapsulates boolean flip logic — the caller never writes <code>setX(x =&gt; !x)</code>.</p>
      <div className="btn-row">
        <button onClick={toggle}>{open ? 'Collapse ▲' : 'Expand ▼'}</button>
        <button className="secondary" onClick={toggleDark}>{dark ? '☀️ Light' : '🌙 Dark'}</button>
      </div>
      {open && (
        <div style={{ marginTop: '1rem', padding: '1rem', background: dark ? '#0f172a' : '#f1f5f9', borderRadius: 8, color: dark ? '#e2e8f0' : '#0f172a' }}>
          Revealed content! Theme: <strong>{dark ? 'dark' : 'light'}</strong>
        </div>
      )}
    </div>
  )
}

function WindowSizeDemo() {
  const { width, height } = useWindowSize()
  return (
    <div className="card">
      <h2>useWindowSize</h2>
      <p>Shared logic extracted into a hook — the component just calls <code>useWindowSize()</code> and gets reactive values.</p>
      <p>Window: <span className="highlight">{width} × {height}</span></p>
    </div>
  )
}

function CustomHooksPage() {
  return (
    <>
      <h1>Custom Hooks</h1>
      <p>
        Any function starting with <code>use</code> that calls other hooks is a custom hook.
        They let you extract and reuse stateful logic without changing your component tree.
      </p>
      <LocalStorageDemo />
      <DebounceDemo />
      <ToggleDemo />
      <WindowSizeDemo />
    </>
  )
}
