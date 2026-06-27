import { useFormStatus } from 'react-dom'
import { useActionState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-form-status')({
  component: UseFormStatusPage,
})

// ── Shared submit button that reads form state without props ──────────────────
function SubmitButton({ label = 'Submit', loadingLabel = 'Submitting…' }: {
  label?: string
  loadingLabel?: string
}) {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending}>
      {pending ? loadingLabel : label}
    </button>
  )
}

function StatusBadge() {
  const { pending, data, method } = useFormStatus()
  if (!pending) return null
  const name = data?.get('name') as string | null
  return (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <span className="badge blue">pending</span>
      {name && <span className="muted">Submitting as: <strong>{name}</strong></span>}
      {method && <span className="badge">method: {method}</span>}
    </div>
  )
}

// ── Demos ─────────────────────────────────────────────────────────────────────
interface FormResult { message: string; error: string }

async function saveProfile(_prev: FormResult, formData: FormData): Promise<FormResult> {
  await new Promise(r => setTimeout(r, 1800))
  const name = (formData.get('name') as string).trim()
  const bio = (formData.get('bio') as string).trim()
  if (!name) return { message: '', error: 'Name is required.' }
  if (bio.length > 200) return { message: '', error: 'Bio must be under 200 characters.' }
  return { message: `Profile for "${name}" saved!`, error: '' }
}

function ProfileForm() {
  const [state, formAction] = useActionState(saveProfile, { message: '', error: '' })

  return (
    <div className="card">
      <h2>Profile form</h2>
      <p>
        <code>SubmitButton</code> and <code>StatusBadge</code> are separate
        components nested inside the form. Both call <code>useFormStatus()</code> to
        read the form's pending state — no props required.
      </p>
      <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <input name="name" placeholder="Display name" autoComplete="off" />
        <textarea
          name="bio"
          placeholder="Short bio…"
          rows={3}
          style={{
            background: '#0f172a', border: '1px solid #334155', color: '#e2e8f0',
            padding: '0.5rem 0.75rem', borderRadius: 6, fontSize: '0.9rem',
            outline: 'none', resize: 'vertical',
          }}
        />
        <StatusBadge />
        <div className="btn-row">
          <SubmitButton label="Save profile" loadingLabel="Saving…" />
        </div>
        {state.message && <p style={{ color: '#22c55e', margin: 0 }}>{state.message}</p>}
        {state.error && <p style={{ color: '#ef4444', margin: 0 }}>{state.error}</p>}
      </form>
    </div>
  )
}

async function sendMessage(__prev: FormResult, formData: FormData): Promise<FormResult> {
  await new Promise(r => setTimeout(r, 1200))
  const msg = (formData.get('msg') as string).trim()
  if (!msg) return { message: '', error: 'Message cannot be empty.' }
  return { message: `Message sent: "${msg}"`, error: '' }
}

function MessageForm() {
  const [state, formAction] = useActionState(sendMessage, { message: '', error: '' })

  return (
    <div className="card">
      <h2>Reusable SubmitButton</h2>
      <p>
        The same <code>SubmitButton</code> component is reused here with different
        labels. It reads its parent form's state through <code>useFormStatus</code>
        — it has no knowledge of what form it's inside.
      </p>
      <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <input name="msg" placeholder="Your message…" autoComplete="off" />
        <div className="btn-row">
          <SubmitButton label="Send" loadingLabel="Sending…" />
        </div>
        {state.message && <p style={{ color: '#22c55e', margin: 0 }}>{state.message}</p>}
        {state.error && <p style={{ color: '#ef4444', margin: 0 }}>{state.error}</p>}
      </form>
    </div>
  )
}

function UseFormStatusPage() {
  return (
    <>
      <h1>useFormStatus</h1>
      <p>
        <code>useFormStatus()</code> (from <code>react-dom</code>) returns the
        pending state, submitted data, and method of the nearest ancestor{' '}
        <code>{'<form>'}</code>. It must be called from a component that is a
        descendant of the form — not from the same component that renders the form.
        This makes it perfect for shared <code>SubmitButton</code> components that
        need no props.
      </p>
      <ProfileForm />
      <MessageForm />
    </>
  )
}
