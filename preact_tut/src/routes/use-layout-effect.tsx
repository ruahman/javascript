import { createFileRoute } from '@tanstack/react-router'
import { useLayoutEffect, useRef, useState } from 'preact/hooks'

export const Route = createFileRoute('/use-layout-effect')({
  component: UseLayoutEffectPage,
})

function MeasureBox() {
  const ref = useRef<HTMLDivElement>(null)
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null)
  const [text, setText] = useState('Edit me to resize this box')

  useLayoutEffect(() => {
    if (!ref.current) return
    const { width, height } = ref.current.getBoundingClientRect()
    setDims({ w: Math.round(width), h: Math.round(height) })
  }, [text])

  return (
    <div>
      <textarea
        value={text}
        onInput={e => setText((e.target as HTMLTextAreaElement).value)}
        style={{ display: 'block', width: 320, marginBottom: '0.5rem', padding: '0.5rem', borderRadius: 6, border: '1px solid #d1d5db' }}
      />
      <div
        ref={ref}
        style={{ display: 'inline-block', background: '#ede9fe', padding: '0.5rem 1rem', borderRadius: 8 }}
      >
        {text}
      </div>
      {dims && (
        <p style={{ marginTop: '0.5rem', color: '#6b7280', fontSize: '0.85rem' }}>
          Measured before paint: <strong>{dims.w} × {dims.h}px</strong>
        </p>
      )}
    </div>
  )
}

function TooltipDemo() {
  const anchorRef = useRef<HTMLSpanElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [tooltipLeft, setTooltipLeft] = useState(0)

  useLayoutEffect(() => {
    if (!visible || !anchorRef.current || !tooltipRef.current) return
    const { left, width } = anchorRef.current.getBoundingClientRect()
    const { width: tw } = tooltipRef.current.getBoundingClientRect()
    setTooltipLeft(Math.round(left + width / 2 - tw / 2))
  }, [visible])

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span
        ref={anchorRef}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        style={{ background: '#ddd6fe', padding: '0.3rem 0.75rem', borderRadius: 6, cursor: 'default' }}
      >
        Hover me
      </span>
      {visible && (
        <div
          ref={tooltipRef}
          style={{
            position: 'fixed', top: 8, left: tooltipLeft,
            background: '#1e1b4b', color: '#fff',
            padding: '0.3rem 0.75rem', borderRadius: 6,
            fontSize: '0.85rem', whiteSpace: 'nowrap', pointerEvents: 'none',
          }}
        >
          Positioned synchronously — no flicker
        </div>
      )}
    </div>
  )
}

function UseLayoutEffectPage() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>useLayoutEffect</h1>
      <p style={{ color: '#6b7280' }}>
        Like <code>useEffect</code> but fires <em>synchronously after DOM mutations, before the browser paints</em>.
        Use it when you need to read DOM layout (sizes, positions) and immediately mutate to avoid a visible flicker.
      </p>

      <section>
        <h2>DOM measurement before paint</h2>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          The mirror box is measured with <code>useLayoutEffect</code> so the size readout is always current before the user sees the frame.
          With <code>useEffect</code> there would be a one-frame lag.
        </p>
        <MeasureBox />
      </section>

      <section>
        <h2>Tooltip centering</h2>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          Tooltip width isn't known until after render. <code>useLayoutEffect</code> reads it and repositions before paint — no jump.
        </p>
        <TooltipDemo />
      </section>

      <section>
        <h2>When to prefer useEffect instead</h2>
        <ul style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          <li>Data fetching — doesn't touch the DOM</li>
          <li>Subscriptions, timers — not paint-critical</li>
          <li>Anything that can run after paint without visible glitches</li>
        </ul>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          <code>useLayoutEffect</code> blocks painting, so prefer <code>useEffect</code> by default and reach for <code>useLayoutEffect</code> only when you see a flicker.
        </p>
      </section>
    </div>
  )
}
