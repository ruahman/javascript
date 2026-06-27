import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-layout-effect')({
  component: UseLayoutEffectPage,
})

function MeasureDemo() {
  const boxRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [text, setText] = useState('Type below to resize this box!')

  useLayoutEffect(() => {
    if (!boxRef.current) return
    const { width, height } = boxRef.current.getBoundingClientRect()
    setSize({ w: Math.round(width), h: Math.round(height) })
  })

  return (
    <div className="card">
      <h2>Measure before paint</h2>
      <p>
        <code>useLayoutEffect</code> fires synchronously after DOM mutations but
        before the browser paints. Reading layout here (size, scroll, position) and
        updating state is safe — the user never sees an intermediate frame.
      </p>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        style={{ width: '100%', marginBottom: '0.75rem' }}
        placeholder="Type to change the box content…"
      />
      <div
        ref={boxRef}
        style={{
          display: 'inline-block',
          background: '#0f172a',
          border: '1px solid #334155',
          borderRadius: 8,
          padding: '0.75rem 1rem',
          maxWidth: '100%',
          wordBreak: 'break-word',
        }}
      >
        {text}
      </div>
      <p style={{ marginTop: '0.75rem' }}>
        Measured: <span className="highlight">{size.w} × {size.h} px</span> — updated before paint.
      </p>
    </div>
  )
}

function TimingCompareDemo() {
  const [show, setShow] = useState(false)
  const layoutRef = useRef<HTMLParagraphElement>(null)
  const effectRef = useRef<HTMLParagraphElement>(null)
  const [layoutTop, setLayoutTop] = useState<number | null>(null)
  const [effectTop, setEffectTop] = useState<number | null>(null)

  useLayoutEffect(() => {
    if (layoutRef.current)
      setLayoutTop(Math.round(layoutRef.current.getBoundingClientRect().top))
  })

  useEffect(() => {
    if (effectRef.current)
      setEffectTop(Math.round(effectRef.current.getBoundingClientRect().top))
  })

  return (
    <div className="card">
      <h2>useLayoutEffect vs useEffect timing</h2>
      <p>
        <code>useEffect</code> runs after the browser paints — updating state inside
        it causes a second render that the user briefly sees.{' '}
        <code>useLayoutEffect</code> runs before paint, so state updates fold into
        the same frame with no flicker.
      </p>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} elements</button>
      </div>
      {show && (
        <div className="grid2">
          <div>
            <p className="muted" style={{ marginBottom: '0.4rem' }}>useLayoutEffect</p>
            <div style={{ background: '#166534', color: '#bbf7d0', padding: '0.6rem', borderRadius: 6 }}>
              <p ref={layoutRef} style={{ margin: 0 }}>top: {layoutTop ?? '…'}px</p>
            </div>
          </div>
          <div>
            <p className="muted" style={{ marginBottom: '0.4rem' }}>useEffect</p>
            <div style={{ background: '#1d4ed8', color: '#bfdbfe', padding: '0.6rem', borderRadius: 6 }}>
              <p ref={effectRef} style={{ margin: 0 }}>top: {effectTop ?? '…'}px</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function UseLayoutEffectPage() {
  return (
    <>
      <h1>useLayoutEffect</h1>
      <p>
        Same signature as <code>useEffect</code> but fires synchronously after DOM
        mutations and before the browser repaints. Prefer <code>useEffect</code> by
        default — reach for <code>useLayoutEffect</code> only when you need to read
        layout or make synchronous DOM adjustments before the user sees the screen.
      </p>
      <MeasureDemo />
      <TimingCompareDemo />
    </>
  )
}
