import { useState } from 'react'
import { createPortal } from 'react-dom'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portals')({
  component: PortalsPage,
})

function Modal({ title, children, onClose }: {
  title: string
  children: React.ReactNode
  onClose: () => void
}) {
  return createPortal(
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#1e293b', border: '1px solid #334155', borderRadius: 16,
          padding: '2rem', maxWidth: 480, width: '90%', position: 'relative',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ margin: 0, color: '#f8fafc' }}>{title}</h2>
          <button
            onClick={onClose}
            className="secondary"
            style={{ padding: '0.25rem 0.6rem', fontSize: '1rem' }}
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  )
}

function Tooltip({ text, children }: { text: string; children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  function handleMouseEnter(e: React.MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setPos({ x: rect.left + rect.width / 2, y: rect.top - 8 })
    setVisible(true)
  }

  return (
    <>
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setVisible(false)}
        style={{ cursor: 'default', borderBottom: '1px dashed #3b82f6' }}
      >
        {children}
      </span>
      {visible && createPortal(
        <div style={{
          position: 'fixed',
          left: pos.x, top: pos.y,
          transform: 'translate(-50%, -100%)',
          background: '#0f172a', color: '#e2e8f0',
          padding: '0.4rem 0.8rem', borderRadius: 6,
          fontSize: '0.8rem', pointerEvents: 'none',
          border: '1px solid #334155', zIndex: 999,
          whiteSpace: 'nowrap',
        }}>
          {text}
        </div>,
        document.body,
      )}
    </>
  )
}

function ModalDemo() {
  const [open, setOpen] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  return (
    <div className="card">
      <h2>Modal portal</h2>
      <p>
        The modal renders directly into <code>document.body</code> via{' '}
        <code>createPortal</code> — it escapes any <code>overflow: hidden</code> or{' '}
        <code>z-index</code> stacking contexts on ancestor elements. React events
        still bubble through the React component tree, not the DOM tree.
      </p>
      <div className="btn-row">
        <button onClick={() => setOpen(true)}>Open modal</button>
        <span className="muted">
          Button clicked inside modal: <span className="highlight">{clickCount}</span>
        </span>
      </div>
      {open && (
        <Modal title="Portal modal" onClose={() => setOpen(false)}>
          <p>
            This node is a child of <code>{'<ModalDemo>'}</code> in the React tree,
            but it lives under <code>{'<body>'}</code> in the DOM.
          </p>
          <p>
            Click the button — the event bubbles up through the{' '}
            <strong>React</strong> tree (reaching the parent) even though the DOM
            parent is <code>body</code>.
          </p>
          <div className="btn-row" style={{ marginTop: '0.5rem' }}>
            <button onClick={() => setClickCount(c => c + 1)}>Click me</button>
            <button className="secondary" onClick={() => setOpen(false)}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  )
}

function TooltipDemo() {
  return (
    <div className="card">
      <h2>Tooltip portal</h2>
      <p>
        Tooltips rendered inside a clipped container would be cut off. A portal
        escapes to <code>body</code> so the tooltip always appears above everything.
        Hover the terms below.
      </p>
      <p style={{ lineHeight: 2 }}>
        React portals solve the{' '}
        <Tooltip text="overflow: hidden clips child elements">overflow clipping</Tooltip>{' '}
        problem and the{' '}
        <Tooltip text="z-index only scopes within a stacking context">z-index stacking</Tooltip>{' '}
        problem simultaneously by mounting outside the current DOM subtree.
      </p>
    </div>
  )
}

function PortalsPage() {
  return (
    <>
      <h1>Portals</h1>
      <p>
        <code>createPortal(children, domNode)</code> renders React children into a
        different part of the DOM while keeping them in the same React component
        tree. Events bubble through the React tree normally — not the DOM tree.
      </p>
      <ModalDemo />
      <TooltipDemo />
    </>
  )
}
