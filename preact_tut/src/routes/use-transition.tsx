import { createFileRoute } from '@tanstack/react-router'
import { useTransition, useDeferredValue } from 'preact/compat'
import { useState, useMemo } from 'preact/hooks'

export const Route = createFileRoute('/use-transition')({
  component: UseTransitionPage,
})

const ITEMS = Array.from({ length: 10_000 }, (_, i) => `Item ${i + 1}`)

function FilterList({ filter }: { filter: string }) {
  const filtered = useMemo(
    () => (filter ? ITEMS.filter(it => it.includes(filter)) : ITEMS),
    [filter],
  )
  return (
    <ul style={{ maxHeight: 180, overflowY: 'auto', paddingLeft: '1.25rem', fontSize: '0.85rem', margin: 0 }}>
      {filtered.slice(0, 100).map(it => <li key={it}>{it}</li>)}
      {filtered.length > 100 && (
        <li style={{ color: '#9ca3af' }}>…and {filtered.length - 100} more</li>
      )}
    </ul>
  )
}

function TransitionDemo() {
  const [input, setInput] = useState('')
  const [query, setQuery] = useState('')
  const [isPending, startTransition] = useTransition()

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
        <input
          value={input}
          onInput={e => {
            const v = (e.target as HTMLInputElement).value
            setInput(v)                          // urgent — update input immediately
            startTransition(() => setQuery(v))   // non-urgent — update the big list
          }}
          placeholder="Filter 10 000 items…"
          style={{ padding: '0.4rem 0.75rem', borderRadius: 6, border: '1px solid #d1d5db', width: 260 }}
        />
        {isPending && (
          <span style={{ color: '#7c3aed', fontSize: '0.82rem' }}>updating…</span>
        )}
      </div>
      <FilterList filter={query} />
    </div>
  )
}

function DeferredDemo() {
  const [input, setInput] = useState('')
  const deferred = useDeferredValue(input)
  const isStale = input !== deferred

  return (
    <div>
      <input
        value={input}
        onInput={e => setInput((e.target as HTMLInputElement).value)}
        placeholder="Filter 10 000 items…"
        style={{ padding: '0.4rem 0.75rem', borderRadius: 6, border: '1px solid #d1d5db', width: 260, marginBottom: '0.5rem' }}
      />
      <div style={{ opacity: isStale ? 0.4 : 1, transition: 'opacity 0.15s' }}>
        <FilterList filter={deferred} />
      </div>
    </div>
  )
}

function UseTransitionPage() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>useTransition / useDeferredValue</h1>
      <p style={{ color: '#6b7280' }}>
        Both keep urgent UI updates (typing) responsive during expensive renders.
        They differ in <em>where the deferral lives</em>: <code>useTransition</code> wraps the state setter;
        <code>useDeferredValue</code> wraps the value.
      </p>
      <p style={{ color: '#7c3aed', fontSize: '0.82rem', background: '#f5f3ff', padding: '0.5rem 0.75rem', borderRadius: 6 }}>
        Note: Preact doesn't implement concurrent rendering, so the performance benefit here is limited to a requestAnimationFrame deferral.
        In React 18 with concurrent mode these hooks have much stronger guarantees.
      </p>

      <section>
        <h2>useTransition</h2>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          <code>startTransition</code> marks the list update as interruptible.
          <code>isPending</code> is true while the transition is in progress — useful for a loading indicator.
          Use this when you own the state setter.
        </p>
        <TransitionDemo />
      </section>

      <section>
        <h2>useDeferredValue</h2>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          Useful when the value comes from outside (a prop or context) and you don't control the setter.
          The list fades while the deferred value lags behind the input.
        </p>
        <DeferredDemo />
      </section>

      <section>
        <h2>Which to use?</h2>
        <ul style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          <li><strong>useTransition</strong> — you own the setter and want <code>isPending</code></li>
          <li><strong>useDeferredValue</strong> — value comes from a prop/context, no setter to wrap</li>
        </ul>
      </section>
    </div>
  )
}
