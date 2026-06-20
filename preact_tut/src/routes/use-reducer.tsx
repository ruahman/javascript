import { createFileRoute } from '@tanstack/react-router'
import { useReducer, useState } from 'preact/hooks'

export const Route = createFileRoute('/use-reducer')({
  component: UseReducerPage,
})

type Todo = { id: number; text: string; done: boolean }
type Action =
  | { type: 'add'; text: string }
  | { type: 'toggle'; id: number }
  | { type: 'remove'; id: number }
  | { type: 'clear_done' }

function reducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.text, done: false }]
    case 'toggle':
      return state.map(t => t.id === action.id ? { ...t, done: !t.done } : t)
    case 'remove':
      return state.filter(t => t.id !== action.id)
    case 'clear_done':
      return state.filter(t => !t.done)
  }
}

function UseReducerPage() {
  const [todos, dispatch] = useReducer(reducer, [
    { id: 1, text: 'Learn Preact', done: true },
    { id: 2, text: 'Build something cool', done: false },
  ])
  const [input, setInput] = useState('')

  function addTodo() {
    const text = input.trim()
    if (!text) return
    dispatch({ type: 'add', text })
    setInput('')
  }

  const doneCount = todos.filter(t => t.done).length

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>useReducer</h1>
      <p style={{ color: '#6b7280' }}>
        Like <code>useState</code> but state transitions go through a pure
        <code> reducer(state, action) → newState</code> function.
        Ideal for complex state with multiple update patterns.
      </p>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          value={input}
          onInput={e => setInput((e.target as HTMLInputElement).value)}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
          placeholder="New todo… (Enter to add)"
          style={{ flex: 1, padding: '0.4rem 0.75rem', borderRadius: 6, border: '1px solid #d1d5db' }}
        />
        <button onClick={addTodo}>Add</button>
        <button onClick={() => dispatch({ type: 'clear_done' })} disabled={doneCount === 0}>
          Clear done ({doneCount})
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.5rem 0', borderBottom: '1px solid #f3f4f6',
          }}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => dispatch({ type: 'toggle', id: todo.id })}
            />
            <span style={{ flex: 1, textDecoration: todo.done ? 'line-through' : 'none', color: todo.done ? '#9ca3af' : undefined }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'remove', id: todo.id })} style={{ padding: '0.2rem 0.5rem' }}>✕</button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p style={{ color: '#9ca3af' }}>Nothing here. Add a todo above.</p>}
    </div>
  )
}
