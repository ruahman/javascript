import { createFileRoute } from '@tanstack/react-router'
import { memo } from 'preact/compat'
import { useState, useCallback, useRef } from 'preact/hooks'

export const Route = createFileRoute('/use-callback')({
  component: UseCallbackPage,
})

type ChildProps = { label: string; onClick: () => void }

const TrackedChild = memo(({ label, onClick }: ChildProps) => {
  const renderCount = useRef(0)
  renderCount.current++
  return (
    <div style={{
      border: '1px solid #e5e7eb', borderRadius: 8, padding: '1rem', marginBottom: '0.5rem',
      background: renderCount.current > 1 ? '#fefce8' : '#f0fdf4',
    }}>
      <strong>{label}</strong>
      <span style={{ marginLeft: '1rem', color: '#6b7280', fontSize: '0.85rem' }}>
        render #{renderCount.current}
      </span>
      <button onClick={onClick} style={{ marginLeft: '1rem' }}>+1</button>
    </div>
  )
})

function UseCallbackPage() {
  const [stableCount, setStableCount] = useState(0)
  const [unstableCount, setUnstableCount] = useState(0)
  const [other, setOther] = useState(0)

  // Recreated every render → TrackedChild referentially sees a new prop → re-renders
  const unstableCallback = () => setUnstableCount(c => c + 1)

  // Stable identity across renders → TrackedChild skips re-render
  const stableCallback = useCallback(() => setStableCount(c => c + 1), [])

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>useCallback</h1>
      <p style={{ color: '#6b7280' }}>
        Returns a memoized function. Useful when passing callbacks to <code>memo()</code>-wrapped
        children — a new function reference on every render breaks memoization.
      </p>

      <section>
        <h2>Comparison</h2>
        <p>
          Stable: <strong>{stableCount}</strong> | Unstable: <strong>{unstableCount}</strong> | Other: <strong>{other}</strong>
        </p>
        <TrackedChild label="Stable callback (useCallback)" onClick={stableCallback} />
        <TrackedChild label="Unstable callback (no useCallback)" onClick={unstableCallback} />
        <button onClick={() => setOther(n => n + 1)} style={{ marginTop: '0.5rem' }}>
          Increment "other" — watch which children re-render
        </button>
      </section>
    </div>
  )
}
