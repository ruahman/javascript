import { Component, useState, type ReactNode, type ErrorInfo } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/error-boundary')({
  component: ErrorBoundaryPage,
})

// ── Error Boundary class component ────────────────────────────────────────────
interface BoundaryState { error: Error | null }

class ErrorBoundary extends Component<
  { children: ReactNode; fallback?: (error: Error, reset: () => void) => ReactNode },
  BoundaryState
> {
  state: BoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): BoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  reset = () => this.setState({ error: null })

  render() {
    const { error } = this.state
    if (error) {
      return this.props.fallback
        ? this.props.fallback(error, this.reset)
        : (
          <div style={{ padding: '1rem', background: '#450a0a', borderRadius: 8, border: '1px solid #7f1d1d' }}>
            <p style={{ color: '#fca5a5', marginBottom: '0.5rem' }}>Something went wrong</p>
            <code style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.8rem' }}>
              {error.message}
            </code>
            <button onClick={this.reset}>Try again</button>
          </div>
        )
    }
    return this.props.children
  }
}

// ── Components that can throw ─────────────────────────────────────────────────
function BombButton({ label, message }: { label: string; message: string }) {
  const [explode, setExplode] = useState(false)
  if (explode) throw new Error(message)
  return <button className="danger" onClick={() => setExplode(true)}>{label}</button>
}

function BasicDemo() {
  const [key, setKey] = useState(0)

  return (
    <div className="card">
      <h2>Basic error boundary</h2>
      <p>
        Click "Throw error" to make the child crash. The boundary catches the error
        via <code>getDerivedStateFromError</code> and renders the fallback instead of
        an empty screen. "Try again" resets the boundary's state, which unmounts and
        remounts the crashed subtree.
      </p>
      <ErrorBoundary key={key}>
        <div className="btn-row">
          <BombButton label="Throw error" message="Render error from BombButton" />
          <button className="secondary" onClick={() => setKey(k => k + 1)}>
            Remount tree
          </button>
        </div>
      </ErrorBoundary>
    </div>
  )
}

function CustomFallbackDemo() {
  const [key, setKey] = useState(0)

  return (
    <div className="card">
      <h2>Custom fallback UI</h2>
      <p>
        The <code>fallback</code> prop receives the caught <code>error</code> and a{' '}
        <code>reset</code> callback, so you can render contextual recovery UI with
        full access to the error message.
      </p>
      <ErrorBoundary
        key={key}
        fallback={(error, reset) => (
          <div style={{ background: '#1c1917', border: '1px solid #78350f', borderRadius: 10, padding: '1.25rem' }}>
            <p style={{ color: '#fbbf24', fontWeight: 600, marginBottom: '0.4rem' }}>
              Caught: {error.message}
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
              <code>componentDidCatch</code> also logged the full stack to the console.
            </p>
            <div className="btn-row" style={{ marginTop: '0.75rem' }}>
              <button onClick={reset}>Reset boundary</button>
              <button className="secondary" onClick={() => setKey(k => k + 1)}>Remount subtree</button>
            </div>
          </div>
        )}
      >
        <BombButton label="Crash with custom fallback" message="Network request failed" />
      </ErrorBoundary>
    </div>
  )
}

function ErrorBoundaryPage() {
  return (
    <>
      <h1>Error Boundary</h1>
      <p>
        An error boundary is a class component that implements{' '}
        <code>getDerivedStateFromError</code> (to render a fallback) and optionally{' '}
        <code>componentDidCatch</code> (to log). It catches render errors in any
        descendant — errors in event handlers or async code are not caught and must
        be handled separately.
      </p>
      <BasicDemo />
      <CustomFallbackDemo />
      <div className="card">
        <h2>What error boundaries don't catch</h2>
        <p>
          Errors inside <code>setTimeout</code>, Promise rejection handlers, event
          handlers (<code>onClick</code> etc.), and errors in the boundary itself
          are not caught. For async errors you typically use{' '}
          <code>try/catch</code> inside <code>useEffect</code> or action handlers.
        </p>
      </div>
    </>
  )
}
