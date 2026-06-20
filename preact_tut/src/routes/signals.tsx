import { createFileRoute } from '@tanstack/react-router'
import { signal, computed, effect, batch } from '@preact/signals'

export const Route = createFileRoute('/signals')({
  component: SignalsPage,
})

// Signals are reactive values that live outside component state
const count = signal(0)
const multiplier = signal(2)
const product = computed(() => count.value * multiplier.value)

const effectLog = signal<string[]>([])

effect(() => {
  if (count.value === 0) return
  effectLog.value = [`count → ${count.value}`, ...effectLog.value].slice(0, 5)
})

const text = signal('Hello, signals!')

function SignalsPage() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Signals</h1>
      <p style={{ color: '#6b7280' }}>
        <code>@preact/signals</code> provides reactive primitives.
        Only the DOM nodes that actually read a signal re-render — not the whole component tree.
      </p>

      <section>
        <h2>signal() + computed()</h2>
        <p>count: <strong>{count}</strong></p>
        <p>multiplier: <strong>{multiplier}</strong></p>
        <p>product (computed): <strong>{product}</strong></p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button onClick={() => count.value--}>count −</button>
          <button onClick={() => count.value++}>count +</button>
          <button onClick={() => count.value = 0}>reset count</button>
          <button onClick={() => multiplier.value = Math.max(1, multiplier.value - 1)}>multiplier −</button>
          <button onClick={() => multiplier.value++}>multiplier +</button>
        </div>
        <button
          onClick={() => batch(() => { count.value = 10; multiplier.value = 5 })}
          style={{ marginTop: '0.5rem' }}
        >
          batch update (count=10, multiplier=5)
        </button>
      </section>

      <section>
        <h2>effect()</h2>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          Fires automatically whenever a signal it reads changes.
        </p>
        <ul style={{ fontSize: '0.85rem', color: '#6b7280', paddingLeft: '1.25rem' }}>
          {effectLog.value.length === 0
            ? <li>No effects yet — change count above.</li>
            : effectLog.value.map((entry, i) => <li key={i}>{entry}</li>)}
        </ul>
      </section>

      <section>
        <h2>Text signal in a controlled input</h2>
        <input
          value={text}
          onInput={e => (text.value = (e.target as HTMLInputElement).value)}
          style={{ padding: '0.4rem 0.75rem', borderRadius: 6, border: '1px solid #d1d5db', marginRight: '0.75rem', width: 260 }}
        />
        <span>→ <strong>{text}</strong></span>
      </section>
    </div>
  )
}
