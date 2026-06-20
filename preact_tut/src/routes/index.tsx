import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const features = [
  { to: '/use-state', label: 'useState', desc: 'Manage local state in functional components' },
  { to: '/use-effect', label: 'useEffect', desc: 'Run side effects and clean them up' },
  { to: '/use-ref', label: 'useRef', desc: 'Access DOM nodes and hold mutable values' },
  { to: '/use-context', label: 'useContext', desc: 'Share state without prop drilling' },
  { to: '/use-reducer', label: 'useReducer', desc: 'Complex state via reducer + dispatch' },
  { to: '/use-memo', label: 'useMemo', desc: 'Cache expensive computations' },
  { to: '/use-callback', label: 'useCallback', desc: 'Stable callback references' },
  { to: '/signals', label: 'Signals', desc: 'Fine-grained reactive state from @preact/signals' },
  { to: '/portals', label: 'Portals', desc: 'Render outside the current DOM tree' },
  { to: '/error-boundary', label: 'Error Boundary', desc: 'Catch rendering errors gracefully' },
  { to: '/forward-ref', label: 'forwardRef', desc: 'Pass refs through component boundaries' },
  { to: '/memo', label: 'memo()', desc: 'Skip re-renders when props are unchanged' },
] as const

function HomePage() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Preact Feature Tour</h1>
      <p style={{ color: '#6b7280' }}>
        Each card links to a live, interactive example of a Preact feature.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
        gap: '1rem',
        marginTop: '1.5rem',
      }}>
        {features.map(({ to, label, desc }) => (
          <Link key={to} to={to} style={{ textDecoration: 'none' }}>
            <div style={{
              border: '1px solid #e5e7eb',
              borderRadius: 10,
              padding: '1rem',
              transition: 'box-shadow 0.15s',
            }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 2px 12px rgba(124,58,237,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
            >
              <h3 style={{ margin: '0 0 0.4rem', color: '#7c3aed', fontSize: '1rem' }}>{label}</h3>
              <p style={{ margin: 0, color: '#6b7280', fontSize: '0.85rem' }}>{desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
