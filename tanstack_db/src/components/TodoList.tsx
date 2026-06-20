import { useLiveQuery, eq } from '@tanstack/react-db'
import { todoCollection } from '../db/todoCollection'

type Filter = 'all' | 'active' | 'completed'

interface Props {
  filter: Filter
}

export function TodoList({ filter }: Props) {
  const { data: todos, isLoading } = useLiveQuery(
    (q) => {
      const base = q.from({ todo: todoCollection })
      if (filter === 'active') {
        return base.where(({ todo }) => eq(todo.completed, false))
      }
      if (filter === 'completed') {
        return base.where(({ todo }) => eq(todo.completed, true))
      }
      return base
    },
    [filter],
  )

  const toggle = (id: string, completed: boolean) => {
    todoCollection.update(id, (draft) => {
      draft.completed = !completed
    })
  }

  const remove = (id: string) => {
    todoCollection.delete(id)
  }

  if (isLoading) return <p>Loading…</p>

  if (!todos?.length) return <p className="empty">No todos here.</p>

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'done' : ''}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggle(todo.id, todo.completed)}
          />
          <span>{todo.text}</span>
          <button onClick={() => remove(todo.id)} aria-label="delete">
            ✕
          </button>
        </li>
      ))}
    </ul>
  )
}
