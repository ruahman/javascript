import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'preact/compat'
import { useState } from 'preact/hooks'

export const Route = createFileRoute('/suspense')({
  component: SuspensePage,
})

// Defined before lazy() so the reference is valid inside the Promise
function ChartComponent() {
  const bars = [65, 40, 80, 55, 90, 70, 45, 60]
  return (
    <div style={{ padding: '1rem', background: '#f5f3ff', borderRadius: 10, border: '1px solid #ddd6fe' }}>
      <strong>Lazy-loaded Chart</strong>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, marginTop: '0.75rem', height: 100 }}>
        {bars.map((h, i) => (
          <div
            key={i}
            style={{
              width: 34, height: h,
              background: `hsl(${250 + i * 12}, 65%, 58%)`,
              borderRadius: '4px 4px 0 0',
              display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
              color: '#fff', fontSize: '0.7rem', paddingTop: 2,
            }}
          >
            {h}
          </div>
        ))}
      </div>
    </div>
  )
}

// Simulates a lazily loaded chunk with a 1.5s network delay
const LazyChart = lazy(
  () =>
    new Promise<{ default: typeof ChartComponent }>(resolve =>
      setTimeout(() => resolve({ default: ChartComponent }), 1500),
    ),
)

function Spinner() {
  return (
    <div style={{ padding: '1rem', color: '#7c3aed', fontStyle: 'italic', fontSize: '0.9rem' }}>
      ⏳ Loading chart… (simulated 1.5s delay)
    </div>
  )
}

function SuspensePage() {
  const [show, setShow] = useState(false)
  const [mountKey, setMountKey] = useState(0)

  function reload() {
    setShow(false)
    setTimeout(() => { setMountKey(k => k + 1); setShow(true) }, 0)
  }

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Suspense + lazy()</h1>
      <p style={{ color: '#6b7280' }}>
        <code>lazy()</code> wraps a dynamic import so the component's code is only fetched when first rendered.
        <code>{'<Suspense>'}</code> catches the thrown Promise and shows a <code>fallback</code> until the
        chunk (or any async resource) resolves.
      </p>

      <section>
        <h2>Lazy-loaded component</h2>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
          {!show
            ? <button onClick={() => setShow(true)}>Load chart</button>
            : <button onClick={reload}>Unload &amp; reload</button>}
        </div>
        {show && (
          <Suspense key={mountKey} fallback={<Spinner />}>
            <LazyChart />
          </Suspense>
        )}
      </section>

      <section>
        <h2>How it works</h2>
        <ol style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          <li><code>lazy(() =&gt; import('./Heavy'))</code> returns a wrapper component</li>
          <li>On first render the wrapper <em>throws a Promise</em> (the dynamic import)</li>
          <li>The nearest <code>{'<Suspense>'}</code> catches it and renders <code>fallback</code></li>
          <li>When the Promise resolves, Preact re-renders with the real component</li>
        </ol>
      </section>

      <section>
        <h2>Nesting Suspense boundaries</h2>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          You can nest <code>{'<Suspense>'}</code> to show different fallbacks for different subtrees.
          Only the nearest ancestor boundary catches a suspension — outer boundaries are unaffected.
        </p>
      </section>
    </div>
  )
}
