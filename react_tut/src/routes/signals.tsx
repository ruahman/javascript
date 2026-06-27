import { createFileRoute } from '@tanstack/react-router'
import {
  signal,
  computed,
  effect,
  batch,
  useSignal,
  useComputed,
} from '@preact/signals-react'
import { useRef } from 'react'

export const Route = createFileRoute('/signals')({
  component: SignalsPage,
})

// A module-level signal: shared state that lives outside React and is read
// directly in JSX. Any component that reads `count.value` subscribes to it —
// the Babel transform (@preact/signals-react-transform) rewires the component
// so only the parts that read the signal re-render.
const count = signal(0)

// `computed` derives a new read-only signal from others. It re-evaluates lazily
// and only when its dependencies change.
const doubled = computed(() => count.value * 2)

function GlobalCounter() {
  return (
    <div className="card">
      <h2>Module-level signal</h2>
      <p>
        <code>count</code> is a <code>signal</code> defined outside any component.
        Reading <code>count.value</code> in JSX subscribes this component to it —
        no <code>useState</code>, no setter, no provider.
      </p>
      <div className="big-number">{count.value}</div>
      <p className="muted">
        <code>doubled</code> is a <code>computed</code>: {doubled.value}
      </p>
      <div className="btn-row">
        <button onClick={() => count.value--}>−</button>
        <button onClick={() => count.value++}>＋</button>
        <button className="secondary" onClick={() => (count.value = 0)}>
          Reset
        </button>
      </div>
    </div>
  )
}

function SiblingReader() {
  // A second component reading the same module-level signal. Both stay in sync
  // automatically — the signal is the single source of truth.
  return (
    <div className="card">
      <h2>Shared across components</h2>
      <p>
        This sibling reads the <em>same</em> <code>count</code> signal. Click the
        buttons above and watch it update with no shared parent, context, or
        prop drilling.
      </p>
      <p>
        Current value: <span className="highlight">{count.value}</span>
      </p>
    </div>
  )
}

function LocalSignal() {
  // `useSignal` / `useComputed` are the component-local equivalents — like
  // `useState` but the value is a signal that survives re-renders by identity.
  const text = useSignal('')
  const length = useComputed(() => text.value.length)
  return (
    <div className="card">
      <h2>Local signal: useSignal / useComputed</h2>
      <p>
        Use <code>useSignal</code> when the state belongs to one component.
        <code> useComputed</code> derives from it.
      </p>
      <input
        placeholder="Type something…"
        value={text.value}
        onChange={(e) => (text.value = e.target.value)}
        style={{ width: '100%', marginBottom: '0.75rem' }}
      />
      <p className="muted">
        Length: <span className="highlight">{length.value}</span>
      </p>
    </div>
  )
}

function BatchDemo() {
  // Each `.value =` assignment normally notifies subscribers immediately.
  // `batch` coalesces multiple writes so subscribers update once, at the end.
  const a = useSignal(1)
  const b = useSignal(2)
  const sum = useComputed(() => a.value + b.value)
  return (
    <div className="card">
      <h2>batch()</h2>
      <p>
        <code>batch</code> groups multiple signal writes into a single
        notification, so dependents recompute once instead of per-assignment.
      </p>
      <p>
        a = <span className="highlight">{a.value}</span>, b ={' '}
        <span className="highlight">{b.value}</span>, sum ={' '}
        <span className="highlight">{sum.value}</span>
      </p>
      <div className="btn-row">
        <button
          onClick={() =>
            batch(() => {
              a.value++
              b.value++
            })
          }
        >
          Increment both (batched)
        </button>
      </div>
    </div>
  )
}

function EffectDemo() {
  // `effect` runs a side effect whenever any signal it reads changes. It returns
  // a dispose function. Here we start/stop logging `count` to a local list.
  const log = useSignal<string[]>([])
  const disposeRef = useRef<(() => void) | null>(null)
  const running = useSignal(false)

  function toggle() {
    if (disposeRef.current) {
      disposeRef.current()
      disposeRef.current = null
      running.value = false
    } else {
      disposeRef.current = effect(() => {
        // Reading count.value here subscribes the effect to it.
        const line = `count is now ${count.value}`
        log.value = [line, ...log.value].slice(0, 6)
      })
      running.value = true
    }
  }

  return (
    <div className="card">
      <h2>effect()</h2>
      <p>
        <code>effect</code> runs whenever a signal it reads changes — outside of
        React's render cycle. Start it, then change <code>count</code> at the top
        of the page.
      </p>
      <div className="btn-row">
        <button onClick={toggle}>
          {running.value ? 'Stop' : 'Start'} watching count
        </button>
      </div>
      <ul className="muted" style={{ marginTop: '0.75rem' }}>
        {log.value.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  )
}

function SignalsPage() {
  return (
    <>
      <h1>Preact Signals</h1>
      <p>
        Signals (<code>@preact/signals-react</code>) are reactive values you read
        and write via <code>.value</code>. Reading a signal in a component
        subscribes only that component — fine-grained updates without
        re-rendering the whole tree. This page relies on the{' '}
        <code>@preact/signals-react-transform</code> Babel plugin (wired up in{' '}
        <code>vite.config.ts</code>) so components auto-track signal reads.
      </p>
      <GlobalCounter />
      <SiblingReader />
      <LocalSignal />
      <BatchDemo />
      <EffectDemo />
    </>
  )
}