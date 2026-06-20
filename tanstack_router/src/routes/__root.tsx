import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', borderBottom: '1px solid #555' }}>
        <Link to="/" activeOptions={{ exact: true }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </>
  ),
})
