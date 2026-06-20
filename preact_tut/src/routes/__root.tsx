import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
})

type NavLink = { to: string; label: string; exact?: boolean }

const navLinks: NavLink[] = [
  { to: '/', label: 'Home', exact: true },
  { to: '/use-state', label: 'useState' },
  { to: '/use-effect', label: 'useEffect' },
  { to: '/use-ref', label: 'useRef' },
  { to: '/use-context', label: 'useContext' },
  { to: '/use-reducer', label: 'useReducer' },
  { to: '/use-memo', label: 'useMemo' },
  { to: '/use-callback', label: 'useCallback' },
  { to: '/signals', label: 'Signals' },
  { to: '/portals', label: 'Portals' },
  { to: '/error-boundary', label: 'Error Boundary' },
  { to: '/forward-ref', label: 'forwardRef' },
  { to: '/memo', label: 'memo()' },
]

function RootLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <nav style={{
        width: 200, flexShrink: 0,
        background: '#1e1b4b', padding: '1.25rem 1rem',
        display: 'flex', flexDirection: 'column', gap: '0.4rem',
      }}>
        <h2 style={{ color: '#a78bfa', margin: '0 0 1rem', fontSize: '1rem' }}>Preact Features</h2>
        {navLinks.map(({ to, label, exact }) => (
          <Link
            key={to}
            to={to}
            activeOptions={exact ? { exact: true } : undefined}
            style={{ color: '#c4b5fd', textDecoration: 'none', padding: '0.3rem 0.5rem', borderRadius: 6, fontSize: '0.9rem' }}
            activeProps={{ style: { color: '#fff', background: '#4c1d95', fontWeight: 600 } }}
          >
            {label}
          </Link>
        ))}
      </nav>
      <main style={{ flex: 1, padding: '2rem', maxWidth: 760 }}>
        <Outlet />
      </main>
    </div>
  )
}
