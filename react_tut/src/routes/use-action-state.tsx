import { useActionState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-action-state')({
  component: UseActionStatePage,
})

// ── Simulated server actions ──────────────────────────────────────────────────
interface LoginState { message: string; error: string; attempts: number }

async function loginAction(prev: LoginState, formData: FormData): Promise<LoginState> {
  await new Promise(r => setTimeout(r, 1000))
  const email = (formData.get('email') as string).trim()
  const password = formData.get('password') as string

  if (!email || !password)
    return { ...prev, error: 'Both fields are required.', message: '', attempts: prev.attempts + 1 }
  if (!email.includes('@'))
    return { ...prev, error: 'Invalid email address.', message: '', attempts: prev.attempts + 1 }
  if (password.length < 6)
    return { ...prev, error: 'Password must be at least 6 characters.', message: '', attempts: prev.attempts + 1 }

  return { message: `Logged in as ${email}`, error: '', attempts: prev.attempts + 1 }
}

function LoginDemo() {
  const [state, formAction, isPending] = useActionState(loginAction, {
    message: '',
    error: '',
    attempts: 0,
  })

  return (
    <div className="card">
      <h2>Form with useActionState</h2>
      <p>
        <code>useActionState(action, initialState)</code> wires an async action to a
        form. It tracks pending state, passes the previous result back into the next
        call, and keeps everything co-located — no separate <code>useState</code> for
        loading, error, or result.
      </p>
      <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <input name="email" type="email" placeholder="Email" autoComplete="off" />
        <input name="password" type="password" placeholder="Password (min 6 chars)" />
        <div className="btn-row">
          <button type="submit" disabled={isPending}>
            {isPending ? 'Signing in…' : 'Sign in'}
          </button>
          {state.attempts > 0 && (
            <span className="muted">Attempt {state.attempts}</span>
          )}
        </div>
        {state.message && (
          <p style={{ color: '#22c55e', margin: 0 }}>{state.message}</p>
        )}
        {state.error && (
          <p style={{ color: '#ef4444', margin: 0 }}>{state.error}</p>
        )}
      </form>
    </div>
  )
}

interface CounterState { count: number; lastAction: string }

async function counterAction(prev: CounterState, formData: FormData): Promise<CounterState> {
  await new Promise(r => setTimeout(r, 400))
  const op = formData.get('op') as string
  const delta = op === 'inc' ? 1 : op === 'dec' ? -1 : -prev.count
  return { count: prev.count + delta, lastAction: op }
}

function CounterDemo() {
  const [state, formAction, isPending] = useActionState(counterAction, {
    count: 0,
    lastAction: '',
  })

  return (
    <div className="card">
      <h2>Previous state threading</h2>
      <p>
        Each call to the action receives the <em>previous state</em> as its first
        argument — like <code>useReducer</code> but async. Multiple buttons can
        share one <code>formAction</code> by including a hidden input to identify
        the operation.
      </p>
      <div className="big-number">{state.count}</div>
      {state.lastAction && (
        <p className="muted">Last action: <code>{state.lastAction}</code></p>
      )}
      <form action={formAction}>
        <div className="btn-row">
          <button type="submit" name="op" value="dec" disabled={isPending}>−</button>
          <button type="submit" name="op" value="inc" disabled={isPending}>＋</button>
          <button type="submit" name="op" value="reset" className="secondary" disabled={isPending}>
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

function UseActionStatePage() {
  return (
    <>
      <h1>useActionState</h1>
      <p>
        <code>useActionState(action, initialState)</code> is a React 19 hook that
        manages the lifecycle of an async form action — pending state, result, and
        threading previous state back into the next invocation. The returned{' '}
        <code>formAction</code> can be passed directly to a{' '}
        <code>{'<form action={…}>'}</code>.
      </p>
      <LoginDemo />
      <CounterDemo />
    </>
  )
}
