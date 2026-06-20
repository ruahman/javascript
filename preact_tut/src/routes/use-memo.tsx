import { createFileRoute } from '@tanstack/react-router'
import { useState, useMemo } from 'preact/hooks'

export const Route = createFileRoute('/use-memo')({
  component: UseMemoPage,
})

function slowFibonacci(n: number): number {
  if (n <= 1) return n
  return slowFibonacci(n - 1) + slowFibonacci(n - 2)
}

function UseMemoPage() {
  const [n, setN] = useState(30)
  const [unrelated, setUnrelated] = useState(0)
  const [memoEnabled, setMemoEnabled] = useState(true)

  const { result, elapsed } = useMemo(() => {
    const start = performance.now()
    const result = slowFibonacci(n)
    return { result, elapsed: (performance.now() - start).toFixed(1) }
  }, memoEnabled ? [n] : [n, unrelated])

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>useMemo</h1>
      <p style={{ color: '#6b7280' }}>
        Cache the result of an expensive computation. Re-runs only when the
        listed dependencies change.
      </p>

      <section>
        <h2>Fibonacci(n) — recursive, intentionally slow</h2>
        <label>
          n = <strong>{n}</strong>
          <input
            type="range" min={1} max={38} value={n}
            onInput={e => setN(Number((e.target as HTMLInputElement).value))}
            style={{ marginLeft: '0.75rem', width: 200 }}
          />
        </label>
        <p>
          Result: <strong>{result}</strong> — computed in <strong>{elapsed}ms</strong>
        </p>
      </section>

      <section>
        <h2>Unrelated state counter: {unrelated}</h2>
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
          {memoEnabled
            ? 'Memo ON — incrementing this counter does NOT recompute Fibonacci.'
            : 'Memo OFF — every render recomputes Fibonacci (watch the timing spike).'}
        </p>
        <button onClick={() => setUnrelated(v => v + 1)}>Increment counter</button>
        <button onClick={() => setMemoEnabled(v => !v)} style={{ marginLeft: '0.5rem' }}>
          {memoEnabled ? 'Disable memo' : 'Enable memo'}
        </button>
      </section>
    </div>
  )
}
