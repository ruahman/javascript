import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'preact/hooks'

export const Route = createFileRoute('/use-effect')({
  component: UseEffectPage,
})

function UseEffectPage() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const [log, setLog] = useState<string[]>([])

  // Timer — cleanup clears the interval when paused or unmounted
  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(id)
  }, [running])

  // Window resize listener — cleanup removes the handler on unmount
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  // Log effect fires on every seconds change
  useEffect(() => {
    if (seconds === 0) return
    setLog(prev => [`tick at ${seconds}s`, ...prev].slice(0, 5))
  }, [seconds])

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>useEffect</h1>
      <p style={{ color: '#6b7280' }}>
        Run side effects after render. Return a cleanup function to undo the effect
        when deps change or the component unmounts.
      </p>

      <section>
        <h2>Timer (interval + cleanup)</h2>
        <p>Elapsed: <strong>{seconds}s</strong></p>
        <button onClick={() => setRunning(r => !r)}>{running ? 'Pause' : 'Start'}</button>
        <button onClick={() => { setRunning(false); setSeconds(0) }} style={{ marginLeft: '0.5rem' }}>Reset</button>
        {log.length > 0 && (
          <ul style={{ marginTop: '0.75rem', color: '#6b7280', fontSize: '0.85rem', paddingLeft: '1.25rem' }}>
            {log.map((entry, i) => <li key={i}>{entry}</li>)}
          </ul>
        )}
      </section>

      <section>
        <h2>Window Resize (event listener + cleanup)</h2>
        <p>Current window width: <strong>{width}px</strong></p>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>Resize the browser window to see updates.</p>
      </section>
    </div>
  )
}
