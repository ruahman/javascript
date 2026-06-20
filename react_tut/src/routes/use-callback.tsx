import { useState, useCallback, memo } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-callback')({
  component: UseCallbackPage,
})

interface ButtonProps { onClick: () => void; label: string }

const ExpensiveButton = memo(({ onClick, label }: ButtonProps) => {
  const renders = useState(0)
  renders[1](c => c + 1)
  // track without side-effect — just read the ref pattern here for demo clarity
  const count = { current: 0 }
  count.current += 1

  return (
    <button onClick={onClick} className="secondary">
      {label} <span className="badge">{count.current}</span>
    </button>
  )
})
ExpensiveButton.displayName = 'ExpensiveButton'

let addRenders = 0
let resetRenders = 0

const AddButton = memo(({ onAdd, stable }: { onAdd: () => void; stable: boolean }) => {
  addRenders += 1
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <button onClick={onAdd}>Add item</button>
      <span className="muted">re-renders: <span className="highlight">{addRenders}</span></span>
      {!stable && <span className="badge">new ref each render</span>}
    </div>
  )
})
AddButton.displayName = 'AddButton'

const ResetButton = memo(({ onReset, stable }: { onReset: () => void; stable: boolean }) => {
  resetRenders += 1
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <button className="secondary" onClick={onReset}>Reset</button>
      <span className="muted">re-renders: <span className="highlight">{resetRenders}</span></span>
      {stable && <span className="badge blue">stable ref ✓</span>}
    </div>
  )
})
ResetButton.displayName = 'ResetButton'

function Demo({ stable }: { stable: boolean }) {
  const [items, setItems] = useState<number[]>([])
  const [unrelated, setUnrelated] = useState(0)

  const stableAdd = useCallback(() => setItems(i => [...i, i.length + 1]), [])
  const stableReset = useCallback(() => setItems([]), [])

  const unstableAdd = () => setItems(i => [...i, i.length + 1])
  const unstableReset = () => setItems([])

  return (
    <div className="card">
      <h2>{stable ? 'With useCallback' : 'Without useCallback'}</h2>
      <p>
        {stable
          ? 'Functions are wrapped in useCallback — same reference between renders. memo() child skips re-render when parent re-renders for unrelated reasons.'
          : 'Functions are recreated every render — new reference each time. memo() is bypassed because the prop always looks changed.'}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
        <AddButton onAdd={stable ? stableAdd : unstableAdd} stable={stable} />
        <ResetButton onReset={stable ? stableReset : unstableReset} stable={stable} />
      </div>
      <div className="btn-row">
        <button className="secondary" onClick={() => setUnrelated(c => c + 1)}>
          Unrelated update ({unrelated})
        </button>
      </div>
      <p style={{ marginTop: '0.75rem' }} className="muted">Items: {items.join(', ') || 'none'}</p>
    </div>
  )
}

function UseCallbackPage() {
  addRenders = 0
  resetRenders = 0
  const [mode, setMode] = useState<'stable' | 'unstable'>('stable')

  return (
    <>
      <h1>useCallback</h1>
      <p>
        <code>useCallback(fn, deps)</code> returns a memoized function.
        Without it, a new function reference is created on every render, causing
        <code>React.memo</code> children to re-render even when nothing meaningful changed.
      </p>
      <div className="btn-row" style={{ marginBottom: '1.5rem' }}>
        <button onClick={() => setMode('stable')} style={{ outline: mode === 'stable' ? '2px solid white' : 'none' }}>With useCallback</button>
        <button onClick={() => setMode('unstable')} className="secondary" style={{ outline: mode === 'unstable' ? '2px solid white' : 'none' }}>Without useCallback</button>
      </div>
      <Demo key={mode} stable={mode === 'stable'} />
    </>
  )
}
