import { createFileRoute } from '@tanstack/react-router'
import { useSignal, useComputed, useSignalEffect } from '@preact/signals'
import { useState } from 'preact/hooks'

export const Route = createFileRoute('/use-signal')({
  component: UseSignalPage,
})

function Counter() {
  const count = useSignal(0)
  const doubled = useComputed(() => count.value * 2)

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '0.75rem',
      padding: '0.5rem 0.75rem', background: '#f5f3ff', borderRadius: 8,
    }}>
      <button onClick={() => count.value--}>−</button>
      <span>count: <strong>{count}</strong></span>
      <button onClick={() => count.value++}>+</button>
      <span style={{ color: '#7c3aed', fontSize: '0.85rem' }}>doubled: <strong>{doubled}</strong></span>
    </div>
  )
}

function SearchLog() {
  const query = useSignal('')
  const log = useSignal<string[]>([])

  useSignalEffect(() => {
    if (query.value.length > 0) {
      log.value = [`"${query.value}"`, ...log.value].slice(0, 6)
    }
  })

  return (
    <div>
      <input
        value={query}
        onInput={e => (query.value = (e.target as HTMLInputElement).value)}
        placeholder="Type to search…"
        style={{ padding: '0.4rem 0.75rem', borderRadius: 6, border: '1px solid #d1d5db', width: 260 }}
      />
      <p style={{ fontSize: '0.82rem', color: '#6b7280', margin: '0.5rem 0 0.25rem' }}>
        useSignalEffect fired for:
      </p>
      <ul style={{ fontSize: '0.85rem', color: '#6b7280', paddingLeft: '1.25rem', margin: 0 }}>
        {log.value.length === 0
          ? <li>nothing yet</li>
          : log.value.map((entry, i) => <li key={i}>{entry}</li>)}
      </ul>
    </div>
  )
}

function UseSignalPage() {
  const [showCounters, setShowCounters] = useState(true)

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>useSignal / useComputed / useSignalEffect</h1>
      <p style={{ color: '#6b7280' }}>
        Hook versions of <code>signal()</code>, <code>computed()</code>, and <code>effect()</code>
        that are <em>scoped to a component instance</em> and cleaned up on unmount.
        Unlike module-level signals (on the Signals page), these don't live in global scope.
      </p>

      <section>
        <h2>useSignal + useComputed — per-instance state</h2>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          Each <code>Counter</code> has its own independent signal. Mount/unmount them to confirm the signals are created and destroyed with the component.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
          {showCounters && <Counter />}
          {showCounters && <Counter />}
          {showCounters && <Counter />}
        </div>
        <button onClick={() => setShowCounters(v => !v)}>
          {showCounters ? 'Unmount counters' : 'Mount counters'}
        </button>
      </section>

      <section>
        <h2>useSignalEffect — no dependency array</h2>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          Tracks signal reads automatically — no dep array to maintain. Cleaned up when the component unmounts.
        </p>
        <SearchLog />
      </section>

      <section>
        <h2>Module-level vs hook-level signals</h2>
        <table style={{ fontSize: '0.85rem', borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ background: '#ede9fe' }}>
              <th style={{ padding: '0.4rem 0.75rem', textAlign: 'left' }}>Module-level <code>signal()</code></th>
              <th style={{ padding: '0.4rem 0.75rem', textAlign: 'left' }}><code>useSignal()</code></th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '0.35rem 0.75rem' }}>Shared across all instances</td><td style={{ padding: '0.35rem 0.75rem' }}>Private to each component</td></tr>
            <tr style={{ background: '#faf5ff' }}><td style={{ padding: '0.35rem 0.75rem' }}>Lives for the app lifetime</td><td style={{ padding: '0.35rem 0.75rem' }}>Cleaned up on unmount</td></tr>
            <tr><td style={{ padding: '0.35rem 0.75rem' }}>Good for global/shared state</td><td style={{ padding: '0.35rem 0.75rem' }}>Good for local component state</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
