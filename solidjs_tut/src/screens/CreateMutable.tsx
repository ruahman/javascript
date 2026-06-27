import { For } from "solid-js";
import { createMutable } from "solid-js/store";

type Todo = { id: number; text: string; done: boolean };

export function CreateMutable() {
  // createMutable wraps state in a reactive proxy you can mutate directly.
  // No setter function, no path syntax — just plain JS object mutations.
  const state = createMutable<{ count: number; todos: Todo[] }>({
    count: 0,
    todos: [
      { id: 1, text: "Buy groceries", done: false },
      { id: 2, text: "Learn SolidJS", done: true },
    ],
  });

  let nextId = 3;

  return (
    <>
      <h1>createMutable</h1>
      <p>
        <code>createMutable</code> returns a deeply reactive proxy object. Unlike{" "}
        <code>createStore</code>, you mutate it <strong>directly</strong> — no setter
        or path syntax required. Useful when you prefer mutable ergonomics over
        immutability guarantees.
      </p>

      <h2>Counter</h2>
      <p>count: {state.count}</p>
      <button onClick={() => state.count++}>+</button>
      <button onClick={() => state.count--}>−</button>

      <h2>Todos</h2>
      <For each={state.todos}>
        {(todo) => (
          <div>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => (todo.done = !todo.done)}
            />
            <span
              style={{
                "text-decoration": todo.done ? "line-through" : "none",
                "margin-left": "0.5rem",
              }}
            >
              {todo.text}
            </span>
          </div>
        )}
      </For>
      <button
        onClick={() =>
          state.todos.push({ id: nextId++, text: "New todo", done: false })
        }
      >
        Add Todo
      </button>
    </>
  );
}
