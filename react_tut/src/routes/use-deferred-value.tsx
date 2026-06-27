import { useState, useDeferredValue, memo } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-deferred-value')({
  component: UseDeferredValuePage,
})

const ITEMS = Array.from({ length: 10_000 }, (_, i) =>
  ['apple', 'apricot', 'banana', 'blueberry', 'cherry', 'cranberry', 'date', 'elderberry',
   'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'lime', 'mango', 'nectarine'][i % 16] + ` ${i + 1}`
)

// memo is required — without it the deferred render fires on every keystroke anyway
const HeavyList = memo(function HeavyList({ query }: { query: string }) {
  const matches = ITEMS.filter(s => s.toLowerCase().includes(query.toLowerCase()))
  return (
    <div>
      <p className="muted" style={{ marginBottom: '0.5rem' }}>
        {matches.length.toLocaleString()} matches (showing first 100)
      </p>
      <ul className="item-list" style={{ maxHeight: 260, overflowY: 'auto' }}>
        {matches.slice(0, 100).map(s => (
          <li key={s} style={{ padding: '0.2rem 0', fontSize: '0.85rem' }}>{s}</li>
        ))}
        {matches.length > 100 && (
          <li className="muted">…and {matches.length - 100} more</li>
        )}
      </ul>
    </div>
  )
})

function DeferredDemo() {
  const [query, setQuery] = useState('')
  const deferred = useDeferredValue(query)
  const isStale = query !== deferred

  return (
    <div className="card">
      <h2>Deferred list filtering</h2>
      <p>
        The input is bound to <code>query</code> (updates instantly on every
        keystroke). <code>HeavyList</code> receives <code>deferredQuery</code> —
        React renders it at lower priority so fast typing never blocks the input.
        The opacity drop signals when the list is catching up.
      </p>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Filter 10 000 items…"
        style={{ width: '100%', marginBottom: '1rem' }}
        autoComplete="off"
      />
      <div style={{ opacity: isStale ? 0.5 : 1, transition: 'opacity 0.15s' }}>
        {isStale && <p className="muted" style={{ marginBottom: '0.5rem' }}>Updating…</p>}
        <HeavyList query={deferred} />
      </div>
    </div>
  )
}

function UseDeferredValuePage() {
  return (
    <>
      <h1>useDeferredValue</h1>
      <p>
        <code>useDeferredValue(value)</code> returns a "lagged" copy of a value.
        React re-renders with the deferred copy at lower priority — urgent updates
        (like typing) are never blocked by the slow re-render. Pair it with{' '}
        <code>memo</code> so the slow tree only re-renders when the deferred value
        actually changes, not on every keystroke.
      </p>
      <DeferredDemo />
      <div className="card">
        <h2>useDeferredValue vs useTransition</h2>
        <p>
          Use <code>useTransition</code> when you own the state update (you can wrap{' '}
          <code>setState</code> in <code>startTransition</code>). Use{' '}
          <code>useDeferredValue</code> when the value comes from a prop or context
          that you cannot control.
        </p>
      </div>
    </>
  )
}
