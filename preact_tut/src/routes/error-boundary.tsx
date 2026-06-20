import { createFileRoute } from '@tanstack/react-router'
import { Component, type ComponentChildren } from 'preact'
import { useState } from 'preact/hooks'

export const Route = createFileRoute('/error-boundary')({
  component: ErrorBoundaryPage,
})

type BoundaryState = { error: Error | null }

class ErrorBoundary extends Component<
  { children: ComponentChildren; fallback?: string },
  BoundaryState
> {
  state: BoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): BoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error('ErrorBoundary caught:', error.message, info.componentStack)
  }

  reset = () => this.setState({ error: null })

  render() {
    if (this.state.error) {
      return (
        <div style={{
          background: '#fef2f2', border: '1px solid #fca5a5',
          borderRadius: 10, padding: '1rem', marginTop: '0.5rem',
        }}>
          <p style={{ margin: '0 0 0.5rem', color: '#b91c1c', fontWeight: 600 }}>
            {this.props.fallback ?? 'Something went wrong'}
          </p>
          <pre style={{ fontSize: '0.8rem', color: '#991b1b', marginBottom: '0.75rem' }}>
            {this.state.error.message}
          </pre>
          <button onClick={this.reset}>Try again</button>
        </div>
      )
    }
    return this.props.children
  }
}

function Bomb({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) throw new Error('Kaboom! The component threw during render.')
  return (
    <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 8, padding: '1rem' }}>
      Component is healthy — no errors.
    </div>
  )
}

function ErrorBoundaryPage() {
  const [shouldThrow, setShouldThrow] = useState(false)

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Error Boundary</h1>
      <p style={{ color: '#6b7280' }}>
        A class component that implements <code>getDerivedStateFromError</code>{' '}
        (and optionally <code>componentDidCatch</code>) acts as an error boundary —
        it catches rendering errors in any descendant and shows a fallback UI instead
        of crashing the whole app.
      </p>

      <section>
        <h2>Live Demo</h2>
        <ErrorBoundary fallback="The Bomb component crashed!">
          <Bomb shouldThrow={shouldThrow} />
        </ErrorBoundary>
        <button
          onClick={() => setShouldThrow(v => !v)}
          style={{ marginTop: '1rem', background: shouldThrow ? '#fee2e2' : undefined }}
        >
          {shouldThrow ? '✓ Fix the component' : '💣 Throw an error'}
        </button>
        <p style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          After throwing, click "Try again" in the error UI to reset the boundary,
          then "Fix the component" to restore the healthy state.
        </p>
      </section>
    </div>
  )
}
