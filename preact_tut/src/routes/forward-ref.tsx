import { createFileRoute } from '@tanstack/react-router'
import { forwardRef } from 'preact/compat'
import { useRef, useState } from 'preact/hooks'

export const Route = createFileRoute('/forward-ref')({
  component: ForwardRefPage,
})

type FancyInputProps = {
  placeholder?: string
  label?: string
}

const FancyInput = forwardRef<HTMLInputElement, FancyInputProps>(
  ({ placeholder, label }, ref) => (
    <div>
      {label && <label style={{ display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>{label}</label>}
      <input
        ref={ref}
        placeholder={placeholder}
        style={{
          padding: '0.5rem 1rem',
          border: '2px solid #7c3aed',
          borderRadius: 8,
          fontSize: '1rem',
          outline: 'none',
          width: 280,
        }}
        onFocus={e => (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.25)')}
        onBlur={e => (e.currentTarget.style.boxShadow = '')}
      />
    </div>
  )
)

function ForwardRefPage() {
  const firstRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)
  const [log, setLog] = useState<string[]>([])

  function append(msg: string) {
    setLog(prev => [msg, ...prev].slice(0, 6))
  }

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>forwardRef</h1>
      <p style={{ color: '#6b7280' }}>
        <code>forwardRef</code> lets a component expose a ref to its internal DOM
        node. The parent can then call DOM methods (focus, blur, scroll…) on the
        child's element directly.
      </p>

      <section>
        <h2>Two FancyInput components, controlled by the parent</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
          <FancyInput ref={firstRef} label="First name" placeholder="e.g. Ada" />
          <FancyInput ref={secondRef} label="Last name" placeholder="e.g. Lovelace" />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button onClick={() => { firstRef.current?.focus(); append('Focused first input') }}>
            Focus first
          </button>
          <button onClick={() => { secondRef.current?.focus(); append('Focused second input') }}>
            Focus second
          </button>
          <button onClick={() => {
            if (firstRef.current) firstRef.current.value = ''
            if (secondRef.current) secondRef.current.value = ''
            append('Cleared both inputs')
          }}>
            Clear both
          </button>
        </div>
        {log.length > 0 && (
          <ul style={{ marginTop: '0.75rem', color: '#6b7280', fontSize: '0.85rem', paddingLeft: '1.25rem' }}>
            {log.map((entry, i) => <li key={i}>{entry}</li>)}
          </ul>
        )}
      </section>
    </div>
  )
}
