import { createFileRoute } from '@tanstack/react-router'
import { useRef, useState } from 'preact/hooks'

export const Route = createFileRoute('/use-ref')({
  component: UseRefPage,
})

function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null)
  const renderCount = useRef(0)
  const [stateCounter, setStateCounter] = useState(0)

  renderCount.current++

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>useRef</h1>
      <p style={{ color: '#6b7280' }}>
        Returns a mutable object whose <code>.current</code> persists for the
        lifetime of the component. Changing <code>.current</code> does NOT
        trigger a re-render.
      </p>

      <section>
        <h2>DOM Ref — focus an input imperatively</h2>
        <input
          ref={inputRef}
          placeholder="Click the button to focus me"
          style={{ padding: '0.4rem 0.75rem', borderRadius: 6, border: '1px solid #d1d5db', marginRight: '0.75rem' }}
        />
        <button onClick={() => inputRef.current?.focus()}>Focus</button>
        <button onClick={() => { if (inputRef.current) inputRef.current.value = '' }} style={{ marginLeft: '0.5rem' }}>
          Clear
        </button>
      </section>

      <section>
        <h2>Mutable Ref — track renders without causing them</h2>
        <p>
          Render count (ref): <strong>{renderCount.current}</strong>
          {' '}| State counter: <strong>{stateCounter}</strong>
        </p>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          The ref increments on every render (caused by state changes below) but
          doesn't itself trigger a render.
        </p>
        <button onClick={() => setStateCounter(n => n + 1)}>
          Increment state (causes re-render)
        </button>
      </section>
    </div>
  )
}
