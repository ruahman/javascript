import { use, createContext, useState, Suspense } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-hook')({
  component: UseHookPage,
})

// ── use(promise) ──────────────────────────────────────────────────────────────
interface Post { id: number; title: string; body: string }

const postCache = new Map<number, Promise<Post>>()

function getPost(id: number) {
  if (!postCache.has(id)) {
    postCache.set(
      id,
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(r => r.json()),
    )
  }
  return postCache.get(id)!
}

function PostDisplay({ id }: { id: number }) {
  const post = use(getPost(id))
  return (
    <div>
      <p style={{ fontWeight: 600, color: '#e2e8f0', marginBottom: '0.3rem', textTransform: 'capitalize' }}>
        {post.title}
      </p>
      <p style={{ fontSize: '0.85rem', margin: 0 }}>{post.body.slice(0, 160)}…</p>
    </div>
  )
}

function UsePromiseDemo() {
  const [postId, setPostId] = useState(1)

  return (
    <div className="card">
      <h2>use(promise)</h2>
      <p>
        <code>use(promise)</code> reads the resolved value of a promise inside
        render. The nearest <code>{'<Suspense>'}</code> shows the fallback while
        waiting. The promise must be created <em>outside</em> render (or cached)
        to avoid re-fetching on every re-render — here we use a simple{' '}
        <code>Map</code> cache.
      </p>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        {[1, 2, 3, 4, 5].map(id => (
          <button
            key={id}
            onClick={() => setPostId(id)}
            className={postId !== id ? 'secondary' : undefined}
            style={{ outline: postId === id ? '2px solid white' : 'none' }}
          >
            Post {id}
          </button>
        ))}
      </div>
      <Suspense fallback={<p className="muted">Loading post…</p>}>
        <PostDisplay id={postId} />
      </Suspense>
    </div>
  )
}

// ── use(context) ──────────────────────────────────────────────────────────────
const ThemeCtx = createContext<'dark' | 'light'>('dark')

function ThemedBox({ show }: { show: boolean }) {
  // use() can be called inside a condition — useContext cannot
  if (!show) return <p className="muted">Toggle to render the consumer.</p>
  const theme = use(ThemeCtx)
  return (
    <div style={{
      padding: '0.75rem 1rem', borderRadius: 8,
      background: theme === 'dark' ? '#0f172a' : '#f1f5f9',
      color: theme === 'dark' ? '#e2e8f0' : '#0f172a',
      border: '1px solid #334155',
    }}>
      Theme from <code>use(ThemeCtx)</code>:{' '}
      <span className="highlight">{theme}</span>
    </div>
  )
}

function UseContextDemo() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [show, setShow] = useState(true)

  return (
    <div className="card">
      <h2>use(context)</h2>
      <p>
        <code>use(context)</code> reads a context value just like{' '}
        <code>useContext</code>, but it can be called inside conditions and loops.
        This is useful when you only want to subscribe to a context in certain
        code paths.
      </p>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        <button onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}>
          Toggle theme ({theme})
        </button>
        <button className="secondary" onClick={() => setShow(s => !s)}>
          {show ? 'Hide' : 'Show'} consumer
        </button>
      </div>
      <ThemeCtx.Provider value={theme}>
        <ThemedBox show={show} />
      </ThemeCtx.Provider>
    </div>
  )
}

function UseHookPage() {
  return (
    <>
      <h1>use()</h1>
      <p>
        React 19's <code>use()</code> hook reads the value of a resource —
        either a <code>Promise</code> or a <code>Context</code> — during render.
        Unlike all other hooks, <code>use()</code> can be called inside conditions
        and loops.
      </p>
      <UsePromiseDemo />
      <UseContextDemo />
    </>
  )
}
