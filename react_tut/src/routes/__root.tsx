import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: Root,
})

const links = [
  { to: '/', label: 'Home', exact: true },
  // Core hooks
  { to: '/use-state', label: 'useState' },
  { to: '/use-effect', label: 'useEffect' },
  { to: '/use-context', label: 'useContext' },
  { to: '/use-reducer', label: 'useReducer' },
  { to: '/use-ref', label: 'useRef' },
  { to: '/use-memo', label: 'useMemo' },
  { to: '/use-callback', label: 'useCallback' },
  { to: '/use-layout-effect', label: 'useLayoutEffect' },
  { to: '/use-imperative-handle', label: 'useImperativeHandle' },
  { to: '/use-deferred-value', label: 'useDeferredValue' },
  { to: '/use-id', label: 'useId' },
  { to: '/use-sync-external-store', label: 'useSyncExternalStore' },
  { to: '/custom-hooks', label: 'Custom Hooks' },
  { to: '/suspense', label: 'Suspense' },
  // React 19
  { to: '/use-hook', label: 'use()' },
  { to: '/use-action-state', label: 'useActionState' },
  { to: '/use-form-status', label: 'useFormStatus' },
  { to: '/use-optimistic', label: 'useOptimistic' },
  { to: '/ref-as-prop', label: 'ref as prop' },
  // Other APIs
  { to: '/portals', label: 'Portals' },
  { to: '/react-memo', label: 'React.memo' },
  { to: '/error-boundary', label: 'Error Boundary' },
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
