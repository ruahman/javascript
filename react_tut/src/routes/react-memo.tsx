import { memo, useState, useCallback, useRef } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/react-memo')({
  component: ReactMemoPage,
})

function RenderBadge({ label }: { label: string }) {
  const count = useRef(0)
  count.current++
  return (
    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
      {label} renders: <span className="highlight">{count.current}</span>
    </span>
  )
}

// Without memo — re-renders whenever parent re-renders
function UnmemoizedChild({ value }: { value: number }) {
  return (
    <div style={{ padding: '0.75rem', background: '#0f172a', borderRadius: 8 }}>
      <RenderBadge label="UnmemoizedChild" />
      <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem' }}>value: {value}</p>
    </div>
  )
}

// With memo — only re-renders when props change
const MemoizedChild = memo(function MemoizedChild({ value }: { value: number }) {
  return (
    <div style={{ padding: '0.75rem', background: '#0f172a', borderRadius: 8 }}>
      <RenderBadge label="MemoizedChild" />
      <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem' }}>value: {value}</p>
    </div>
  )
})

function BasicMemoDemo() {
  const [parentCount, setParentCount] = useState(0)
  const [childValue, setChildValue] = useState(42)

  return (
    <div className="card">
      <h2>React.memo basics</h2>
      <p>
        "Re-render parent" increments a counter that causes the parent to
        re-render — the child prop doesn't change. Watch how the unmemoized
        child re-renders every time while the memoized child does not.
      </p>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        <button onClick={() => setParentCount(c => c + 1)}>
          Re-render parent ({parentCount})
        </button>
        <button className="secondary" onClick={() => setChildValue(v => v + 1)}>
          Change child value
        </button>
      </div>
      <div className="grid2">
        <div>
          <p className="muted" style={{ marginBottom: '0.4rem' }}>Without memo</p>
          <UnmemoizedChild value={childValue} />
        </div>
        <div>
          <p className="muted" style={{ marginBottom: '0.4rem' }}>With React.memo</p>
          <MemoizedChild value={childValue} />
        </div>
      </div>
    </div>
  )
}

// With memo + callback — shows that new function refs break memoization
const MemoWithCallback = memo(function MemoWithCallback({
  label,
  onClick,
}: {
  label: string
  onClick: () => void
}) {
  return (
    <div style={{ padding: '0.75rem', background: '#0f172a', borderRadius: 8 }}>
      <RenderBadge label={label} />
      <button onClick={onClick} style={{ marginTop: '0.5rem', display: 'block' }}>Action</button>
    </div>
  )
})

function CallbackDemo() {
  const [count, setCount] = useState(0)

  // New function on every render — breaks memo
  const unstableHandler = () => setCount(c => c + 1)

  // Stable reference — memo works
  const stableHandler = useCallback(() => setCount(c => c + 1), [])

  return (
    <div className="card">
      <h2>memo + useCallback</h2>
      <p>
        <code>React.memo</code> does a shallow prop comparison. A function created
        inline is a new reference on every render, so the memoized child re-renders
        anyway. Wrap handlers in <code>useCallback</code> to keep the reference stable.
      </p>
      <p>Parent renders: <span className="highlight">{count}</span></p>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        <button onClick={() => setCount(c => c + 1)}>Re-render parent</button>
      </div>
      <div className="grid2">
        <div>
          <p className="muted" style={{ marginBottom: '0.4rem' }}>inline handler (breaks memo)</p>
          <MemoWithCallback label="Unstable" onClick={unstableHandler} />
        </div>
        <div>
          <p className="muted" style={{ marginBottom: '0.4rem' }}>useCallback handler (works)</p>
          <MemoWithCallback label="Stable" onClick={stableHandler} />
        </div>
      </div>
    </div>
  )
}

function ReactMemoPage() {
  return (
    <>
      <h1>React.memo</h1>
      <p>
        <code>React.memo(Component)</code> wraps a component so it only re-renders
        when its props change (shallow comparison). It is the component-level
        counterpart to <code>useMemo</code> and <code>useCallback</code> — all three
        are only worth reaching for when a render is measurably expensive.
      </p>
      <BasicMemoDemo />
      <CallbackDemo />
    </>
  )
}
