import { useSyncExternalStore } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-sync-external-store')({
  component: UseSyncExternalStorePage,
})

// ── Minimal vanilla store factory ─────────────────────────────────────────────
function createStore<T>(initial: T) {
  let state = initial
  const listeners = new Set<() => void>()
  return {
    subscribe(notify: () => void) {
      listeners.add(notify)
      return () => listeners.delete(notify)
    },
    getSnapshot() { return state },
    set(next: T | ((prev: T) => T)) {
      state = typeof next === 'function' ? (next as (p: T) => T)(state) : next
      listeners.forEach(fn => fn())
    },
  }
}

// Shared store lives outside React — multiple components subscribe to it
const counterStore = createStore(0)
const colorStore = createStore('#3b82f6')

// ── Components that read the same stores independently ────────────────────────
function CounterDisplay() {
  const count = useSyncExternalStore(counterStore.subscribe, counterStore.getSnapshot)
  return <div className="big-number" style={{ fontSize: '2.5rem' }}>{count}</div>
}

function CounterControls() {
  const count = useSyncExternalStore(counterStore.subscribe, counterStore.getSnapshot)
  return (
    <div className="btn-row">
      <button onClick={() => counterStore.set(c => c - 1)}>−</button>
      <button onClick={() => counterStore.set(c => c + 1)}>＋</button>
      <button className="secondary" onClick={() => counterStore.set(0)} disabled={count === 0}>Reset</button>
    </div>
  )
}

function VanillaStoreDemo() {
  return (
    <div className="card">
      <h2>Vanilla store</h2>
      <p>
        <code>counterStore</code> is a plain JS object with <code>subscribe</code>,{' '}
        <code>getSnapshot</code>, and <code>set</code>. Both components below call{' '}
        <code>useSyncExternalStore</code> independently — React keeps them in sync
        automatically, even during concurrent rendering.
      </p>
      <p className="muted">
        <code>CounterDisplay</code> and <code>CounterControls</code> are siblings —
        no prop-drilling or context needed.
      </p>
      <CounterDisplay />
      <CounterControls />
    </div>
  )
}

// ── Browser API subscriptions ─────────────────────────────────────────────────
function useOnlineStatus() {
  return useSyncExternalStore(
    cb => {
      window.addEventListener('online', cb)
      window.addEventListener('offline', cb)
      return () => {
        window.removeEventListener('online', cb)
        window.removeEventListener('offline', cb)
      }
    },
    () => navigator.onLine,
    () => true,
  )
}

function useColorStore() {
  return useSyncExternalStore(colorStore.subscribe, colorStore.getSnapshot)
}

function BrowserApiDemo() {
  const online = useOnlineStatus()
  const color = useColorStore()

  return (
    <div className="card">
      <h2>Browser APIs as external stores</h2>
      <p>
        Any subscribe/snapshot pair works — not just custom stores. Here{' '}
        <code>useOnlineStatus</code> wraps the browser's{' '}
        <code>online</code>/<code>offline</code> events, and a color store lets
        multiple consumers react to the same value.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{
          width: 12, height: 12, borderRadius: '50%',
          background: online ? '#22c55e' : '#ef4444',
        }} />
        <span style={{ color: online ? '#22c55e' : '#ef4444', fontWeight: 600 }}>
          {online ? 'Online' : 'Offline'}
        </span>
        <span className="muted">(toggle your network in DevTools to test)</span>
      </div>
      <div className="btn-row">
        {['#3b82f6', '#22c55e', '#ef4444', '#f59e0b', '#8b5cf6'].map(c => (
          <button
            key={c}
            onClick={() => colorStore.set(c)}
            style={{ background: c, outline: color === c ? '2px solid white' : 'none' }}
          >
            {c}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '1rem', height: 40, borderRadius: 8, background: color, transition: 'background 0.3s' }} />
    </div>
  )
}

function UseSyncExternalStorePage() {
  return (
    <>
      <h1>useSyncExternalStore</h1>
      <p>
        <code>useSyncExternalStore(subscribe, getSnapshot)</code> is the correct way
        to read from stores that live outside React — Redux, Zustand, vanilla JS
        objects, or browser APIs. It handles the "tearing" problem that would arise
        if you read external state with <code>useEffect</code> + <code>useState</code>.
      </p>
      <VanillaStoreDemo />
      <BrowserApiDemo />
    </>
  )
}
