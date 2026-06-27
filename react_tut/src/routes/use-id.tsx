import { useId, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-id')({
  component: UseIdPage,
})

function FormField({
  label,
  type = 'text',
  hint,
}: {
  label: string
  type?: string
  hint?: string
}) {
  const id = useId()
  const hintId = `${id}-hint`
  const [value, setValue] = useState('')

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label
        htmlFor={id}
        style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.85rem', color: '#94a3b8' }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={label}
        aria-describedby={hint ? hintId : undefined}
        style={{ width: '100%' }}
      />
      {hint && (
        <p id={hintId} className="muted" style={{ marginTop: '0.25rem', marginBottom: 0 }}>
          {hint}
        </p>
      )}
      <p className="muted" style={{ marginTop: '0.25rem', marginBottom: 0 }}>
        id: <code>{id}</code>
      </p>
    </div>
  )
}

function MultipleInstancesDemo() {
  const [count, setCount] = useState(2)
  return (
    <div className="card">
      <h2>Multiple instances — no ID collisions</h2>
      <p>
        Each <code>FormField</code> calls <code>useId()</code> and gets a unique,
        stable ID. Adding more instances never produces duplicate <code>id</code>{' '}
        or <code>htmlFor</code> values, so clicking a label always focuses the
        correct input.
      </p>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        <button onClick={() => setCount(c => c + 1)}>Add field</button>
        <button className="secondary" onClick={() => setCount(c => Math.max(1, c - 1))}>Remove</button>
      </div>
      {Array.from({ length: count }, (_, i) => (
        <FormField
          key={i}
          label={`Field ${i + 1}`}
          hint={i === 0 ? 'Each field gets its own unique id from useId()' : undefined}
        />
      ))}
    </div>
  )
}

function AccessibilityDemo() {
  return (
    <div className="card">
      <h2>Accessibility: label ↔ input linking</h2>
      <p>
        Browsers connect a <code>{'<label htmlFor="x">'}</code> to the{' '}
        <code>{'<input id="x">'}</code> with the same value. Hard-coding IDs breaks
        when the same component renders more than once.{' '}
        <code>useId()</code> generates an ID that is unique per component instance
        and stable across re-renders.
      </p>
      <FormField label="Email" type="email" hint="Used for login — never shared." />
      <FormField label="Username" hint="Letters and numbers only." />
      <FormField label="Password" type="password" />
    </div>
  )
}

function UseIdPage() {
  return (
    <>
      <h1>useId</h1>
      <p>
        <code>useId()</code> generates a unique, stable string ID per component
        instance. It solves the problem of needing unique DOM IDs (for{' '}
        <code>htmlFor</code>, <code>aria-describedby</code>, etc.) when a component
        can render multiple times or be server-rendered.
      </p>
      <AccessibilityDemo />
      <MultipleInstancesDemo />
    </>
  )
}
