import { createFileRoute } from '@tanstack/react-router'
import { useId, useState } from 'preact/hooks'

export const Route = createFileRoute('/use-id')({
  component: UseIdPage,
})

type FormFieldProps = {
  label: string
  type?: string
  hint?: string
}

function FormField({ label, type = 'text', hint }: FormFieldProps) {
  const id = useId()
  const hintId = `${id}-hint`

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label
        htmlFor={id}
        style={{ display: 'block', fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.9rem' }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        aria-describedby={hint ? hintId : undefined}
        style={{ padding: '0.4rem 0.75rem', borderRadius: 6, border: '1px solid #d1d5db', width: 280, display: 'block' }}
      />
      {hint && (
        <span
          id={hintId}
          style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: '0.25rem', display: 'block' }}
        >
          {hint}
        </span>
      )}
    </div>
  )
}

function UseIdPage() {
  const [showUsername, setShowUsername] = useState(true)

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>useId</h1>
      <p style={{ color: '#6b7280' }}>
        Generates a <em>stable, unique ID</em> per component instance. Solves the problem of needing
        unique IDs for accessibility attributes (<code>htmlFor</code>, <code>aria-describedby</code>)
        when a component is rendered multiple times on the same page.
      </p>

      <section>
        <h2>FormField — rendered multiple times</h2>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          Each instance gets its own ID so every <code>{'<label>'}</code> links to the right <code>{'<input>'}</code>.
          Inspect the DOM to see the generated IDs (e.g. <code>:r0:</code>, <code>:r1:</code>…).
        </p>
        <FormField label="Email" type="email" hint="We'll never share your email." />
        {showUsername && <FormField label="Username" hint="3–20 characters, letters and numbers only." />}
        <FormField label="Password" type="password" />
        <button onClick={() => setShowUsername(v => !v)}>
          {showUsername ? 'Unmount Username field' : 'Mount Username field'}
        </button>
        <p style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          Mount/unmount the middle field — IDs don't shift or collide because each instance generates its own.
        </p>
      </section>

      <section>
        <h2>Deriving related IDs</h2>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          A single <code>useId()</code> call returns a base ID. Append suffixes to generate as many related IDs
          as needed (<code>{'{id}-hint'}</code>, <code>{'{id}-error'}</code>, etc.) while staying collision-free.
        </p>
        <pre style={{ background: '#f5f3ff', padding: '0.75rem 1rem', borderRadius: 8, fontSize: '0.82rem', overflowX: 'auto' }}>{`function FormField({ hint }) {
  const id = useId()
  return (
    <>
      <label htmlFor={id}>...</label>
      <input id={id} aria-describedby={\`\${id}-hint\`} />
      <span id={\`\${id}-hint\`}>{hint}</span>
    </>
  )
}`}</pre>
      </section>
    </div>
  )
}
