import { useRef, useImperativeHandle, useState, type Ref } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-imperative-handle')({
  component: UseImperativeHandlePage,
})

interface FancyInputHandle {
  focus(): void
  clear(): void
  shake(): void
}

// React 19: ref is a plain prop — no forwardRef wrapper needed
function FancyInput({ ref, placeholder }: { ref?: Ref<FancyInputHandle>; placeholder?: string }) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')
  const [shaking, setShaking] = useState(false)

  useImperativeHandle(ref, () => ({
    focus() { inputRef.current?.focus() },
    clear() { setValue(''); inputRef.current?.focus() },
    shake() {
      setShaking(true)
      setTimeout(() => setShaking(false), 400)
    },
  }))

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder={placeholder}
      style={{
        width: '100%',
        transition: 'transform 0.05s, border-color 0.15s',
        transform: shaking ? 'translateX(6px)' : 'none',
        borderColor: shaking ? '#ef4444' : undefined,
      }}
    />
  )
}

function HandleDemo() {
  const inputRef = useRef<FancyInputHandle>(null)

  return (
    <div className="card">
      <h2>Custom ref handle</h2>
      <p>
        The parent holds a <code>ref</code> to <code>FancyInput</code> but can only
        call the three methods defined in <code>useImperativeHandle</code>. The raw{' '}
        <code>{'<input>'}</code> DOM node is hidden — the component owns its internals.
      </p>
      <div style={{ marginBottom: '1rem' }}>
        <FancyInput ref={inputRef} placeholder="Controlled by parent via ref…" />
      </div>
      <div className="btn-row">
        <button onClick={() => inputRef.current?.focus()}>focus()</button>
        <button className="secondary" onClick={() => inputRef.current?.clear()}>clear()</button>
        <button className="danger" onClick={() => inputRef.current?.shake()}>shake()</button>
      </div>
    </div>
  )
}

function UseImperativeHandlePage() {
  return (
    <>
      <h1>useImperativeHandle</h1>
      <p>
        <code>useImperativeHandle</code> lets a child expose a custom API through its{' '}
        <code>ref</code> — only the methods you list are visible to the parent.
        In React 19, <code>ref</code> is passed as a plain prop; no{' '}
        <code>forwardRef</code> wrapper is needed.
      </p>
      <HandleDemo />
      <div className="card">
        <h2>Why limit what the ref exposes?</h2>
        <p>
          If the parent accessed the raw DOM node it could call any API or mutate
          the element directly, creating a fragile coupling. Exposing only named
          methods defines a stable contract — the component's internals can change
          freely without breaking callers.
        </p>
      </div>
    </>
  )
}
