import { useState, useMemo } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-memo')({
  component: UseMemoPage,
})

function isPrime(n: number): boolean {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false
  return true
}

function PrimeCounter() {
  const [limit, setLimit] = useState(10000)
  const [theme, setTheme] = useState(false)

  const primes = useMemo(() => {
    const result: number[] = []
    for (let i = 2; i <= limit; i++) if (isPrime(i)) result.push(i)
    return result
  }, [limit])

  return (
    <div className="card">
      <h2>Expensive calculation</h2>
      <p>
        Primes up to <code>{limit.toLocaleString()}</code> are only recalculated when <code>limit</code> changes.
        Toggling the theme (an unrelated state update) does <em>not</em> re-run the loop.
      </p>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        <input
          type="range"
          min={1000}
          max={100000}
          step={1000}
          value={limit}
          onChange={e => setLimit(Number(e.target.value))}
          style={{ flex: 1, cursor: 'pointer' }}
        />
        <span style={{ minWidth: 80 }}>{limit.toLocaleString()}</span>
      </div>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        <button className="secondary" onClick={() => setTheme(t => !t)}>
          Toggle theme (unrelated) — {theme ? '🌙' : '☀️'}
        </button>
      </div>
      <p>Found <span className="highlight">{primes.length}</span> primes. Last: <code>{primes[primes.length - 1]}</code></p>
    </div>
  )
}

interface Item { id: number; name: string; category: string }

const ITEMS: Item[] = Array.from({ length: 200 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
  category: ['fruit', 'veggie', 'grain'][i % 3]!,
}))

function FilteredList() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const filtered = useMemo(
    () => ITEMS.filter(item =>
      (category === 'all' || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
    [search, category],
  )

  return (
    <div className="card">
      <h2>Derived / filtered list</h2>
      <p>The filtered list is memoized — it only re-derives when <code>search</code> or <code>category</code> changes.</p>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search…" style={{ flex: 1 }} />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="fruit">Fruit</option>
          <option value="veggie">Veggie</option>
          <option value="grain">Grain</option>
        </select>
      </div>
      <p className="muted">{filtered.length} / {ITEMS.length} items</p>
      <ul className="item-list" style={{ maxHeight: 200, overflowY: 'auto' }}>
        {filtered.slice(0, 20).map(item => (
          <li key={item.id}>
            <span className={`badge ${item.category === 'fruit' ? 'blue' : item.category === 'veggie' ? 'green' : ''}`}>
              {item.category}
            </span>
            {item.name}
          </li>
        ))}
        {filtered.length > 20 && <li className="muted">…and {filtered.length - 20} more</li>}
      </ul>
    </div>
  )
}

function UseMemoPage() {
  return (
    <>
      <h1>useMemo</h1>
      <p>
        <code>useMemo(() =&gt; expensive(), [deps])</code> caches a computed value.
        React skips re-running the function until one of the listed dependencies changes.
        Use it when a computation is measurably slow or when referential stability matters.
      </p>
      <PrimeCounter />
      <FilteredList />
    </>
  )
}
