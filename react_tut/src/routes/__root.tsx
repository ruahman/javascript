import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: Root,
})

const links = [
  { to: '/', label: 'Home', exact: true },
  { to: '/use-state', label: 'useState' },
  { to: '/use-effect', label: 'useEffect' },
  { to: '/use-context', label: 'useContext' },
  { to: '/use-reducer', label: 'useReducer' },
  { to: '/use-ref', label: 'useRef' },
  { to: '/use-memo', label: 'useMemo' },
  { to: '/use-callback', label: 'useCallback' },
  { to: '/custom-hooks', label: 'Custom Hooks' },
  { to: '/suspense', label: 'Suspense' },
] as const

function Root() {
  return (
    <>
      <nav>
        <span className="logo">⚛ React Features</span>
        {links.map(({ to, label, ...rest }) => (
          <Link
            key={to}
            to={to}
            activeOptions={'exact' in rest ? { exact: true } : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  )
}
