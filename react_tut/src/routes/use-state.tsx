import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-state')({
  component: UseStatePage,
})

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="card">
      <h2>Counter</h2>
      <p>Each click calls <code>setCount</code> with the updater form to avoid stale closures.</p>
      <div className="big-number">{count}</div>
      <div className="btn-row">
        <button onClick={() => setCount(c => c - 1)}>−</button>
        <button onClick={() => setCount(c => c + 1)}>＋</button>
        <button className="secondary" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

function Toggle() {
  const [on, setOn] = useState(false)
  return (
    <div className="card">
      <h2>Toggle</h2>
      <p>Boolean state flipped with the functional updater <code>prev =&gt; !prev</code>.</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
        <div style={{
          width: 56, height: 28, borderRadius: 999, cursor: 'pointer',
          background: on ? '#3b82f6' : '#475569', position: 'relative', transition: 'background 0.2s',
        }} onClick={() => setOn(v => !v)}>
          <div style={{
            position: 'absolute', top: 3, left: on ? 31 : 3,
            width: 22, height: 22, borderRadius: '50%', background: '#fff', transition: 'left 0.2s',
          }} />
        </div>
        <span className={on ? 'highlight' : 'muted'}>{on ? 'ON' : 'OFF'}</span>
      </div>
    </div>
  )
}

function MultiState() {
  const [form, setForm] = useState({ name: '', color: '#3b82f6' })
  return (
    <div className="card">
      <h2>Object state</h2>
      <p>A single <code>useState</code> holding an object — spread the previous state when updating one field.</p>
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        <input
          placeholder="Your name"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        />
        <input
          type="color"
          value={form.color}
          onChange={e => setForm(f => ({ ...f, color: e.target.value }))}
          style={{ width: 48, padding: 2, cursor: 'pointer' }}
        />
      </div>
      {form.name && (
        <p style={{ color: form.color, fontWeight: 600 }}>Hello, {form.name}!</p>
      )}
    </div>
  )
}

function UseStatePage() {
  return (
    <>
      <h1>useState</h1>
      <p>
        <code>useState</code> returns a state value and a setter. React re-renders
        the component whenever the setter is called with a new value.
      </p>
      <Counter />
      <Toggle />
      <MultiState />
    </>
  )
}
