import { useRef, type Ref, type InputHTMLAttributes } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ref-as-prop')({
  component: RefAsPropPage,
})

// ── React 19: ref is a plain prop — no forwardRef needed ──────────────────────
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>
  label: string
}

function TextInput({ ref, label, ...rest }: TextInputProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
      <label style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{label}</label>
      <input ref={ref} {...rest} />
    </div>
  )
}

function FocusDemo() {
  const firstRef = useRef<HTMLInputElement>(null)
  const lastRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const fields = [
    { ref: firstRef, label: 'First name', next: lastRef },
    { ref: lastRef, label: 'Last name', next: emailRef },
    { ref: emailRef, label: 'Email', type: 'email', next: null },
  ] as const

  return (
    <div className="card">
      <h2>ref as a plain prop</h2>
      <p>
        In React 19, function components receive <code>ref</code> just like any
        other prop — no <code>forwardRef</code> wrapper or extra import needed.
        The parent below holds three refs and moves focus programmatically.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
        {fields.map(({ ref, label, next, ...rest }) => (
          <TextInput
            key={label}
            ref={ref}
            label={label}
            placeholder={label}
            onKeyDown={e => { if (e.key === 'Enter' && next) next.current?.focus() }}
            {...rest}
          />
        ))}
      </div>
      <div className="btn-row">
        {fields.map(({ ref, label }) => (
          <button key={label} className="secondary" onClick={() => ref.current?.focus()}>
            Focus {label.split(' ')[0]}
          </button>
        ))}
      </div>
      <p className="muted" style={{ marginTop: '0.75rem' }}>
        Press Enter in a field to advance to the next, or use the buttons above.
      </p>
    </div>
  )
}

// ── Comparison: what forwardRef looked like before React 19 ───────────────────
function BeforeAfterDemo() {
  return (
    <div className="card">
      <h2>Before React 19 vs after</h2>
      <p>
        Previously, passing a <code>ref</code> to a function component required
        wrapping it in <code>forwardRef</code>. React 19 removes this ceremony —
        just declare <code>ref</code> in the props type and pass it to the underlying
        element.
      </p>
      <div className="grid2">
        <div>
          <p className="muted" style={{ marginBottom: '0.4rem' }}>React 18 (forwardRef)</p>
          <pre style={{
            background: '#0f172a', borderRadius: 8, padding: '0.75rem',
            fontSize: '0.75rem', color: '#94a3b8', overflowX: 'auto',
          }}>{`const Input = forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => (
  <input ref={ref} {...props} />
))`}</pre>
        </div>
        <div>
          <p className="muted" style={{ marginBottom: '0.4rem' }}>React 19 (plain prop)</p>
          <pre style={{
            background: '#0f172a', borderRadius: 8, padding: '0.75rem',
            fontSize: '0.75rem', color: '#94a3b8', overflowX: 'auto',
          }}>{`function Input({
  ref,
  ...props
}: InputProps & {
  ref?: Ref<HTMLInputElement>
}) {
  return <input ref={ref} {...props} />
}`}</pre>
        </div>
      </div>
    </div>
  )
}

function RefAsPropPage() {
  return (
    <>
      <h1>ref as prop</h1>
      <p>
        React 19 allows function components to accept <code>ref</code> as a plain
        prop. <code>forwardRef</code> is deprecated and will be removed in a future
        major version. Existing <code>forwardRef</code> code continues to work during
        the migration window.
      </p>
      <FocusDemo />
      <BeforeAfterDemo />
    </>
  )
}
