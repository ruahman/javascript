import { useState, useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-effect')({
  component: UseEffectPage,
})

interface Post { id: number; title: string }

function DataFetch() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`)
      .then(r => r.json())
      .then((data: Post[]) => {
        if (!cancelled) {
          setPosts(data)
          setLoading(false)
        }
      })
    return () => { cancelled = true }
  }, [page])

  return (
    <div className="card">
      <h2>Data fetching</h2>
      <p>Runs when <code>page</code> changes. The cleanup sets a flag so a stale response is discarded.</p>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        <button className="secondary" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>← Prev</button>
        <span>Page {page}</span>
        <button className="secondary" onClick={() => setPage(p => p + 1)}>Next →</button>
      </div>
      {loading ? (
        <p className="muted">Loading…</p>
      ) : (
        <ul className="item-list">
          {posts.map(p => <li key={p.id}><span className="badge">{p.id}</span>{p.title}</li>)}
        </ul>
      )}
    </div>
  )
}

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(id)
  }, [running])

  return (
    <div className="card">
      <h2>Timer / cleanup</h2>
      <p><code>setInterval</code> is started when <code>running</code> is true. The cleanup clears it on stop or unmount.</p>
      <div className="big-number">{seconds}s</div>
      <div className="btn-row">
        <button onClick={() => setRunning(r => !r)}>{running ? 'Stop' : 'Start'}</button>
        <button className="secondary" onClick={() => { setRunning(false); setSeconds(0) }}>Reset</button>
      </div>
    </div>
  )
}

function WindowSize() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight })

  useEffect(() => {
    const handler = () => setSize({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <div className="card">
      <h2>Event listener</h2>
      <p>Attaches a <code>resize</code> listener on mount and removes it on unmount — empty dependency array runs once.</p>
      <p>Window: <span className="highlight">{size.w} × {size.h}</span> — try resizing the browser!</p>
    </div>
  )
}

function UseEffectPage() {
  return (
    <>
      <h1>useEffect</h1>
      <p>
        <code>useEffect(fn, deps)</code> runs <em>after</em> the render. Return a cleanup
        function to cancel subscriptions, timers, or async work when the component unmounts
        or deps change.
      </p>
      <DataFetch />
      <Timer />
      <WindowSize />
    </>
  )
}
