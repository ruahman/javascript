import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'preact/hooks'

export const Route = createFileRoute('/use-state')({
  component: UseStatePage,
})

function UseStatePage() {
  const [count, setCount] = useState(0)
  const [on, setOn] = useState(false)
  const [text, setText] = useState('')

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>useState</h1>
      <p style={{ color: '#6b7280' }}>
        Adds reactive local state to a functional component. Each call returns a
        current value and a setter — calling the setter schedules a re-render.
      </p>

      <section>
        <h2>Counter</h2>
        <button onClick={() => setCount(c => c - 1)}>−</button>
        <span style={{ margin: '0 1rem', fontWeight: 600, fontSize: '1.1rem' }}>{count}</span>
        <button onClick={() => setCount(c => c + 1)}>+</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: '1rem' }}>Reset</button>
      </section>

      <section>
        <h2>Boolean Toggle</h2>
        <button
          onClick={() => setOn(v => !v)}
          style={{ background: on ? '#7c3aed' : undefined, color: on ? '#fff' : undefined }}
        >
          {on ? 'ON ✓' : 'OFF ✗'}
        </button>
      </section>

      <section>
        <h2>Controlled Input</h2>
        <input
          type="text"
          value={text}
          onInput={e => setText((e.target as HTMLInputElement).value)}
          placeholder="Type something…"
          style={{ padding: '0.4rem 0.75rem', marginRight: '0.75rem', borderRadius: 6, border: '1px solid #d1d5db' }}
        />
        <span>→ <strong>{text || '(empty)'}</strong></span>
      </section>
    </div>
  )
}
