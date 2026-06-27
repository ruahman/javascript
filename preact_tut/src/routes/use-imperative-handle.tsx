import { createFileRoute } from '@tanstack/react-router'
import { forwardRef } from 'preact/compat'
import { useRef, useImperativeHandle, useState } from 'preact/hooks'

export const Route = createFileRoute('/use-imperative-handle')({
  component: UseImperativeHandlePage,
})

type FancyInputHandle = {
  focus: () => void
  clear: () => void
  getValue: () => string
  selectAll: () => void
}

const FancyInput = forwardRef<FancyInputHandle, { label: string }>(({ label }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => setValue(''),
    getValue: () => value,
    selectAll: () => inputRef.current?.select(),
  }), [value])

  return (
    <div>
      <label style={{ display: 'block', marginBottom: '0.3rem', fontWeight: 600, fontSize: '0.85rem' }}>
        {label}
      </label>
      <input
        ref={inputRef}
        value={value}
        onInput={e => setValue((e.target as HTMLInputElement).value)}
        style={{ padding: '0.4rem 0.75rem', borderRadius: 6, border: '1px solid #d1d5db', width: 280 }}
        placeholder="Type something…"
      />
    </div>
  )
})

function UseImperativeHandlePage() {
  const inputRef = useRef<FancyInputHandle>(null)
  const [readout, setReadout] = useState<string | null>(null)

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>useImperativeHandle</h1>
      <p style={{ color: '#6b7280' }}>
        Used together with <code>forwardRef</code> to expose a <em>custom imperative API</em> on a ref instead
        of the raw DOM node. The parent only sees the methods you explicitly declare — the internal DOM ref stays private.
      </p>

      <section>
        <h2>FancyInput with a custom ref API</h2>
        <FancyInput ref={inputRef} label="Controlled by parent via ref" />
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <button onClick={() => inputRef.current?.focus()}>focus()</button>
          <button onClick={() => inputRef.current?.selectAll()}>selectAll()</button>
          <button onClick={() => inputRef.current?.clear()}>clear()</button>
          <button onClick={() => setReadout(inputRef.current?.getValue() ?? '')}>getValue()</button>
        </div>
        {readout !== null && (
          <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.85rem' }}>
            getValue() → <strong>"{readout}"</strong>
          </p>
        )}
      </section>

      <section>
        <h2>Why not a plain DOM ref?</h2>
        <ul style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          <li>Expose higher-level methods (<code>clear</code>) rather than raw DOM manipulation</li>
          <li>Keep the internal DOM structure private — parent can't reach in and break invariants</li>
          <li>The API can expose component state (<code>getValue</code> reads state, not just <code>input.value</code>)</li>
          <li>The dependency array controls when the handle object is recreated</li>
        </ul>
      </section>

      <section>
        <h2>The pattern</h2>
        <pre style={{ background: '#f5f3ff', padding: '0.75rem 1rem', borderRadius: 8, fontSize: '0.82rem', overflowX: 'auto' }}>{`const MyInput = forwardRef<Handle, Props>((props, ref) => {
  const domRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    focus: () => domRef.current?.focus(),
    clear: () => setValue(''),
  }), [])   // ← dep array like useCallback

  return <input ref={domRef} ... />
})`}</pre>
      </section>
    </div>
  )
}
