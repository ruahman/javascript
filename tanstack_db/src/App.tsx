import { useState } from 'react'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'

type Filter = 'all' | 'active' | 'completed'

export default function App() {
  const [filter, setFilter] = useState<Filter>('all')

  return (
    <div className="app">
      <h1>TanStack DB Todos</h1>
      <AddTodo />
      <div className="filters">
        {(['all', 'active', 'completed'] as Filter[]).map((f) => (
          <button
            key={f}
            className={filter === f ? 'active' : ''}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <TodoList filter={filter} />
    </div>
  )
}
