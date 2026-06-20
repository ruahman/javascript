import { createFileRoute } from '@tanstack/react-router'
import { memo } from 'preact/compat'
import { useState, useRef } from 'preact/hooks'

export const Route = createFileRoute('/memo')({
  component: MemoPage,
})

type CardProps = { value: number; label: string }

const MemoizedCard = memo(({ value, label }: CardProps) => {
  const count = useRef(0)
  count.current++
  return (
    <div style={{
      background: '#f0fdf4', border: '2px solid #86efac',
      borderRadius: 10, padding: '1rem', marginBottom: '0.5rem',
    }}>
      <strong>{label}</strong>
      <span style={{ marginLeft: '1rem', color: '#16a34a' }}>renders: <strong>{count.current}</strong></span>
      <span style={{ marginLeft: '1rem', color: '#6b7280' }}>prop value: {value}</span>
    </div>
  )
})

function PlainCard({ value, label }: CardProps) {
  const count = useRef(0)
  count.current++
  return (
    <div style={{
      background: '#fef2f2', border: '2px solid #fca5a5',
      borderRadius: 10, padding: '1rem', marginBottom: '0.5rem',
    }}>
      <strong>{label}</strong>
      <span style={{ marginLeft: '1rem', color: '#dc2626' }}>renders: <strong>{count.current}</strong></span>
      <span style={{ marginLeft: '1rem', color: '#6b7280' }}>prop value: {value}</span>
    </div>
  )
}

function MemoPage() {
  const [value, setValue] = useState(0)
  const [other, setOther] = useState(0)

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>memo()</h1>
      <p style={{ color: '#6b7280' }}>
        <code>memo(Component)</code> returns a new component that skips re-rendering
        when its props haven't changed (shallow comparison).
        Without memo, every parent re-render causes all children to re-render too.
      </p>

      <section>
        <h2>Side-by-side comparison</h2>
        <p>
          value: <strong>{value}</strong> | other: <strong>{other}</strong>
        </p>
        <MemoizedCard value={value} label="memo() wrapped" />
        <PlainCard value={value} label="No memo()" />

        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
          <button onClick={() => setValue(v => v + 1)}>
            Change value — both should re-render
          </button>
          <button onClick={() => setOther(n => n + 1)}>
            Change "other" — only plain card re-renders
          </button>
        </div>
        <p style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          Watch the render counters — the green card skips renders when its <code>value</code> prop stays the same.
        </p>
      </section>
    </div>
  )
}
