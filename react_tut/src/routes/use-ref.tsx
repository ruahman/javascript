import { useRef, useState, useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-ref')({
  component: UseRefPage,
})

function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div className="card">
      <h2>DOM ref — focus</h2>
      <p><code>useRef</code> holds a reference to the input DOM node. Clicking the button imperatively calls <code>.focus()</code>.</p>
      <div className="btn-row">
        <input ref={inputRef} placeholder="Click the button to focus me" />
        <button onClick={() => inputRef.current?.focus()}>Focus</button>
      </div>
    </div>
  )
}

function Stopwatch() {
  const [display, setDisplay] = useState(0)
  const [running, setRunning] = useState(false)
  const startTime = useRef<number | null>(null)
  const elapsed = useRef(0)
  const frameId = useRef<number | null>(null)

  function tick() {
    if (startTime.current === null) return
    setDisplay(elapsed.current + (Date.now() - startTime.current))
    frameId.current = requestAnimationFrame(tick)
  }

  function start() {
    startTime.current = Date.now()
    setRunning(true)
    frameId.current = requestAnimationFrame(tick)
  }

  function stop() {
    if (frameId.current) cancelAnimationFrame(frameId.current)
    elapsed.current += startTime.current ? Date.now() - startTime.current : 0
    startTime.current = null
    setRunning(false)
  }

  function reset() {
    if (frameId.current) cancelAnimationFrame(frameId.current)
    startTime.current = null
    elapsed.current = 0
    setRunning(false)
    setDisplay(0)
  }

  useEffect(() => () => { if (frameId.current) cancelAnimationFrame(frameId.current) }, [])

  return (
    <div className="card">
      <h2>Mutable ref — stopwatch</h2>
      <p>
        <code>startTime</code> and <code>elapsed</code> are stored in refs — mutating them
        does <em>not</em> trigger a re-render. Only <code>setDisplay</code> drives the UI.
      </p>
      <div className="big-number">{(display / 1000).toFixed(2)}s</div>
      <div className="btn-row">
        {running
          ? <button onClick={stop}>Stop</button>
          : <button onClick={start}>Start</button>}
        <button className="secondary" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

function RenderCount() {
  const [val, setVal] = useState('')
  const renders = useRef(0)
  renders.current += 1

  return (
    <div className="card">
      <h2>Render counter</h2>
      <p>
        <code>renders.current</code> increments on every render without <em>causing</em> one —
        refs persist across renders but mutations are invisible to React.
      </p>
      <div className="btn-row" style={{ marginBottom: '0.75rem' }}>
        <input value={val} onChange={e => setVal(e.target.value)} placeholder="Type to trigger renders" />
      </div>
      <p>Render count: <span className="highlight">{renders.current}</span></p>
    </div>
  )
}

function UseRefPage() {
  return (
    <>
      <h1>useRef</h1>
      <p>
        <code>useRef</code> returns a mutable object whose <code>.current</code> property
        persists for the full lifetime of the component. Two uses: access DOM nodes directly,
        or store any mutable value without causing re-renders.
      </p>
      <FocusInput />
      <Stopwatch />
      <RenderCount />
    </>
  )
}
