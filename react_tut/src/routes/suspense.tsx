import { Suspense, lazy, useState, useTransition, type ReactElement } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/suspense')({
  component: SuspensePage,
})

// ── Lazy-loaded heavy component ───────────────────────────────────────────────
const HeavyChart = lazy(() =>
  // Simulate a slow chunk load (~1 s)
  new Promise<{ default: () => ReactElement }>(resolve =>
    setTimeout(() => resolve({
      default: function Chart() {
        const bars = [60, 85, 40, 95, 70, 55, 80]
        return (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 120, padding: '0 0.5rem' }}>
            {bars.map((h, i) => (
              <div key={i} style={{
                flex: 1, height: `${h}%`, background: '#3b82f6', borderRadius: '4px 4px 0 0',
                display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                fontSize: '0.7rem', paddingTop: 4, color: '#fff',
              }}>{h}</div>
            ))}
          </div>
        )
      }
    }), 1200)
  )
)

// ── Fake async data resource ──────────────────────────────────────────────────
function createResource<T>(promise: Promise<T>) {
  let status: 'pending' | 'success' | 'error' = 'pending'
  let result: T
  let error: unknown
  const suspender = promise.then(
    r => { status = 'success'; result = r },
    e => { status = 'error'; error = e },
  )
  return {
    read() {
      if (status === 'pending') throw suspender
      if (status === 'error') throw error
      return result
    },
  }
}

interface User { id: number; name: string; email: string }

function fetchUser(id: number) {
  return createResource<User>(
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(r => r.json())
  )
}

let resource = fetchUser(1)

function UserCard() {
  const user = resource.read()
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.2rem' }}>
        {user.name[0]}
      </div>
      <div>
        <div style={{ fontWeight: 600 }}>{user.name}</div>
        <div className="muted">{user.email}</div>
      </div>
    </div>
  )
}

function Skeleton() {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#334155', animation: 'pulse 1.5s ease-in-out infinite' }} />
      <div style={{ flex: 1 }}>
        <div style={{ height: 16, width: '60%', background: '#334155', borderRadius: 4, marginBottom: 8 }} />
        <div style={{ height: 12, width: '80%', background: '#1e293b', borderRadius: 4 }} />
      </div>
    </div>
  )
}

function LazyDemo() {
  const [show, setShow] = useState(false)
  return (
    <div className="card">
      <h2>React.lazy + Suspense</h2>
      <p>
        <code>React.lazy</code> wraps a dynamic <code>import()</code>.
        The chart below is loaded as a separate chunk — Suspense shows the fallback
        while the JS loads (simulated 1.2 s delay).
      </p>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        <button onClick={() => setShow(s => !s)}>{show ? 'Unmount chart' : 'Load chart'}</button>
      </div>
      {show && (
        <Suspense fallback={<p className="muted">Loading chart chunk…</p>}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  )
}

function DataSuspenseDemo() {
  const [userId, setUserId] = useState(1)
  const [isPending, startTransition] = useTransition()

  function loadUser(id: number) {
    startTransition(() => {
      resource = fetchUser(id)
      setUserId(id)
    })
  }

  return (
    <div className="card">
      <h2>Suspense for data + useTransition</h2>
      <p>
        The resource throws a Promise while loading (Suspense-compatible pattern).
        <code>useTransition</code> marks the update as non-urgent so the old UI
        stays visible with an <em>isPending</em> overlay instead of falling back to the skeleton.
      </p>
      <div className="btn-row" style={{ marginBottom: '1.5rem' }}>
        {[1, 2, 3, 4, 5].map(id => (
          <button
            key={id}
            onClick={() => loadUser(id)}
            style={{ outline: userId === id ? '2px solid white' : 'none' }}
            className={userId === id ? undefined : 'secondary'}
          >
            User {id}
          </button>
        ))}
      </div>
      <div style={{ opacity: isPending ? 0.5 : 1, transition: 'opacity 0.2s' }}>
        <Suspense fallback={<Skeleton />}>
          <UserCard key={userId} />
        </Suspense>
      </div>
      {isPending && <p className="muted" style={{ marginTop: '0.5rem' }}>Fetching…</p>}
    </div>
  )
}

function SuspensePage() {
  return (
    <>
      <h1>Suspense & lazy</h1>
      <p>
        <code>{'<Suspense fallback={…}>'}</code> catches children that "suspend" —
        either because they used <code>React.lazy</code> (code splitting) or because
        they threw a Promise (data fetching). <code>useTransition</code> keeps the
        current UI visible while the next state loads.
      </p>
      <LazyDemo />
      <DataSuspenseDemo />
    </>
  )
}
