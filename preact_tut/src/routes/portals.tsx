import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'preact/hooks'
import { createPortal } from 'preact/compat'

export const Route = createFileRoute('/portals')({
  component: PortalsPage,
})

function Modal({ title, onClose }: { title: string; onClose: () => void }) {
  return createPortal(
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        background: '#fff', borderRadius: 12,
        padding: '2rem', minWidth: 320, boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}>
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        <p>
          This modal is rendered into <code>document.body</code> via{' '}
          <code>createPortal</code>, completely outside the current component tree
          in the DOM — even though it's written inline here.
        </p>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          Click outside or press Close to dismiss.
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  )
}

function PortalsPage() {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('Portal Modal')

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Portals</h1>
      <p style={{ color: '#6b7280' }}>
        <code>createPortal(children, domNode)</code> renders children into a DOM
        node outside the component's parent hierarchy. Perfect for modals,
        tooltips, and notifications that need to escape overflow/z-index constraints.
      </p>

      <section>
        <h2>Modal Demo</h2>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
          <input
            value={title}
            onInput={e => setTitle((e.target as HTMLInputElement).value)}
            placeholder="Modal title"
            style={{ padding: '0.4rem 0.75rem', borderRadius: 6, border: '1px solid #d1d5db' }}
          />
          <button onClick={() => setOpen(true)}>Open Modal</button>
        </div>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          Open DevTools → Elements to confirm the modal is a direct child of{' '}
          <code>&lt;body&gt;</code>.
        </p>
      </section>

      {open && <Modal title={title} onClose={() => setOpen(false)} />}
    </div>
  )
}
