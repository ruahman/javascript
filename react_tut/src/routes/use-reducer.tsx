import { useReducer, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/use-reducer')({
  component: UseReducerPage,
})

interface Todo { id: number; text: string; done: boolean }

type Action =
  | { type: 'ADD'; text: string }
  | { type: 'TOGGLE'; id: number }
  | { type: 'DELETE'; id: number }
  | { type: 'CLEAR_DONE' }

function reducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.text, done: false }]
    case 'TOGGLE':
      return state.map(t => t.id === action.id ? { ...t, done: !t.done } : t)
    case 'DELETE':
      return state.filter(t => t.id !== action.id)
    case 'CLEAR_DONE':
      return state.filter(t => !t.done)
  }
}

const initial: Todo[] = [
  { id: 1, text: 'Learn useReducer', done: true },
  { id: 2, text: 'Build a demo', done: false },
]

function UseReducerPage() {
  const [todos, dispatch] = useReducer(reducer, initial)
  const [input, setInput] = useState('')

  function add() {
    const text = input.trim()
    if (!text) return
    dispatch({ type: 'ADD', text })
    setInput('')
  }

  const done = todos.filter(t => t.done).length

  return (
    <>
      <h1>useReducer</h1>
      <p>
        <code>useReducer(reducer, initialState)</code> is ideal when the next state
        depends on the previous state via discrete, named actions. The reducer is a
        pure function — easy to test in isolation.
      </p>
      <div className="card">
        <h2>Todo list</h2>
        <p>{todos.length} items · {done} done</p>
        <div className="btn-row" style={{ marginBottom: '1rem' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && add()}
            placeholder="New todo…"
            style={{ flex: 1 }}
          />
          <button onClick={add}>Add</button>
          <button className="secondary" onClick={() => dispatch({ type: 'CLEAR_DONE' })} disabled={done === 0}>
            Clear done
          </button>
        </div>
        <ul className="item-list">
          {todos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => dispatch({ type: 'TOGGLE', id: todo.id })}
                style={{ cursor: 'pointer' }}
              />
              <span style={{ flex: 1, textDecoration: todo.done ? 'line-through' : 'none', color: todo.done ? '#475569' : undefined }}>
                {todo.text}
              </span>
              <button className="danger" style={{ padding: '0.25rem 0.6rem', fontSize: '0.8rem' }}
                onClick={() => dispatch({ type: 'DELETE', id: todo.id })}>
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h2>Dispatched actions</h2>
        <p>Every interaction dispatches one of: <code>ADD</code> · <code>TOGGLE</code> · <code>DELETE</code> · <code>CLEAR_DONE</code></p>
        <p>The reducer handles all transitions in one place, making state changes predictable and traceable.</p>
      </div>
    </>
  )
}
