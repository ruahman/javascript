import { useOptimistic, useState, useRef } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-optimistic')({
  component: UseOptimisticPage,
})

interface Message {
  id: number
  text: string
  author: 'me' | 'them'
  sending?: boolean
  failed?: boolean
}

const initialMessages: Message[] = [
  { id: 1, text: 'Hey, how is the React tutorial going?', author: 'them' },
  { id: 2, text: 'Pretty well! Just adding some React 19 demos.', author: 'me' },
]

async function postMessage(text: string): Promise<Message> {
  await new Promise(r => setTimeout(r, 1200))
  if (Math.random() < 0.2) throw new Error('Network error')
  return { id: Date.now(), text, author: 'me' }
}

function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [optimistic, addOptimistic] = useOptimistic(
    messages,
    (state: Message[], newMsg: Message) => [...state, newMsg],
  )
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleSend(formData: FormData) {
    const text = (formData.get('msg') as string).trim()
    if (!text) return

    const optimisticMsg: Message = { id: Date.now(), text, author: 'me', sending: true }
    addOptimistic(optimisticMsg)

    if (inputRef.current) inputRef.current.value = ''

    try {
      const saved = await postMessage(text)
      setMessages(prev => [...prev, saved])
    } catch {
      // On failure we set the failed flag on the last message
      setMessages(prev => [...prev, { ...optimisticMsg, sending: false, failed: true }])
    }
  }

  return (
    <div className="card">
      <h2>Optimistic chat</h2>
      <p>
        <code>useOptimistic</code> immediately shows the message as "sending" —
        before the server responds. If the request succeeds the real message
        replaces it. ~20% of sends randomly fail to demonstrate the failure path.
      </p>
      <div style={{
        minHeight: 240, maxHeight: 320, overflowY: 'auto',
        display: 'flex', flexDirection: 'column', gap: '0.5rem',
        marginBottom: '1rem', padding: '0.5rem',
        background: '#0f172a', borderRadius: 8,
      }}>
        {optimistic.map(msg => (
          <div
            key={msg.id}
            style={{
              alignSelf: msg.author === 'me' ? 'flex-end' : 'flex-start',
              maxWidth: '75%',
            }}
          >
            <div style={{
              padding: '0.5rem 0.9rem',
              borderRadius: msg.author === 'me' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              background: msg.failed ? '#450a0a' : msg.author === 'me' ? '#1d4ed8' : '#1e293b',
              color: msg.failed ? '#fca5a5' : '#e2e8f0',
              opacity: msg.sending ? 0.6 : 1,
              transition: 'opacity 0.2s',
              border: msg.failed ? '1px solid #7f1d1d' : '1px solid transparent',
            }}>
              {msg.text}
            </div>
            {msg.sending && <p className="muted" style={{ textAlign: 'right', marginTop: 2 }}>Sending…</p>}
            {msg.failed && <p style={{ color: '#ef4444', fontSize: '0.75rem', textAlign: 'right', marginTop: 2 }}>Failed to send</p>}
          </div>
        ))}
      </div>
      <form action={handleSend}>
        <div className="btn-row">
          <input
            ref={inputRef}
            name="msg"
            placeholder="Type a message…"
            style={{ flex: 1 }}
            autoComplete="off"
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}

function LikeButton() {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(142)
  const [optimisticLiked, setOptimisticLiked] = useOptimistic(liked)
  const [optimisticCount, setOptimisticCount] = useOptimistic(count)

  async function handleLike() {
    const next = !liked
    setOptimisticLiked(next)
    setOptimisticCount(c => c + (next ? 1 : -1))

    await new Promise(r => setTimeout(r, 800))
    setLiked(next)
    setCount(c => c + (next ? 1 : -1))
  }

  return (
    <div className="card">
      <h2>Optimistic like button</h2>
      <p>
        The like state and count update <em>immediately</em> on click.
        The real state catches up 800 ms later. If the request failed you
        would reset <code>useState</code> to the previous value and the
        optimistic UI would roll back.
      </p>
      <div className="btn-row">
        <button
          onClick={handleLike}
          className={optimisticLiked ? undefined : 'secondary'}
          style={{ minWidth: 80 }}
        >
          {optimisticLiked ? '♥ Liked' : '♡ Like'}
        </button>
        <span style={{ color: '#94a3b8' }}>{optimisticCount} likes</span>
      </div>
    </div>
  )
}

function UseOptimisticPage() {
  return (
    <>
      <h1>useOptimistic</h1>
      <p>
        <code>useOptimistic(state, updateFn)</code> is a React 19 hook that lets you
        show an optimistic version of state while an async operation is in flight.
        During the operation, the optimistic value is displayed. Once the operation
        completes, React reverts to the real state.
      </p>
      <ChatDemo />
      <LikeButton />
    </>
  )
}
