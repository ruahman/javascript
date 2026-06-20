import { useState } from 'react'
import { todoCollection } from '../db/todoCollection'

export function AddTodo() {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!text.trim()) return
    todoCollection.insert({
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
    })
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add</button>
    </form>
  )
}
