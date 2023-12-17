import { For } from "solid-js/web";
import { createStore, produce } from "solid-js/store";

export function Produce() {
  let input: HTMLInputElement;
  let todoId = 0;
  type Todo = {
    id: number;
    text: string;
    completed: boolean;
  };
  const [todos, setTodos] = createStore<Todo[]>([]);
  const addTodo = (text: string) => {
    // if you don't like the path syntax, you can use produce
    // that returns a proxy of the store for you to mutate
    setTodos(
      produce((todos) => {
        todos.push({ id: ++todoId, text, completed: false });
      }),
    );
  };
  const toggleTodo = (id: number) => {
    setTodos(
      (todo) => todo.id === id,
      produce((todo) => (todo.completed = !todo.completed)),
    );
  };

  return (
    <>
      <div>
        {/* @ts-ignore */}
        <input ref={input} />
        <button
          onClick={(_) => {
            if (!input.value.trim()) return;
            addTodo(input.value);
            input.value = "";
          }}
        >
          Add Todo
        </button>
      </div>
      <For each={todos}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`);
          return (
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onchange={[toggleTodo, id]}
              />
              <span
                style={{
                  "text-decoration": todo.completed ? "line-through" : "none",
                }}
              >
                {text}
              </span>
            </div>
          );
        }}
      </For>
    </>
  );
}
