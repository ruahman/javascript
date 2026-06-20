import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const features = [
  { to: '/use-state', label: 'useState', desc: 'Manage local component state with a counter and toggle examples.' },
  { to: '/use-effect', label: 'useEffect', desc: 'Run side effects: fetch data, set up timers, and clean up subscriptions.' },
  { to: '/use-context', label: 'useContext', desc: 'Share state across the tree without prop-drilling using a theme context.' },
  { to: '/use-reducer', label: 'useReducer', desc: 'Manage complex state transitions with a reducer-based todo list.' },
  { to: '/use-ref', label: 'useRef', desc: 'Access DOM nodes directly and persist values without causing re-renders.' },
  { to: '/use-memo', label: 'useMemo', desc: 'Memoize expensive computations so they only re-run when inputs change.' },
  { to: '/use-callback', label: 'useCallback', desc: 'Stabilize function references to prevent unnecessary child re-renders.' },
  { to: '/custom-hooks', label: 'Custom Hooks', desc: 'Extract and reuse stateful logic with useLocalStorage and useFetch.' },
  { to: '/suspense', label: 'Suspense & lazy', desc: 'Defer rendering until a component or async resource is ready.' },
] as const

function Home() {
  return (
    <>
      <h1>React Features Demo</h1>
      <p>
        Each page below isolates one React feature with a live, interactive example.
        Built with Vite, TypeScript, and TanStack Router.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {features.map(({ to, label, desc }) => (
          <Link key={to} to={to} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', cursor: 'pointer', transition: 'border-color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#3b82f6')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#334155')}
            >
              <code>{label}</code>
              <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>{desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
