import { For } from "solid-js";
import { createStore } from "solid-js/store";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
export function CreateStore() {
  let input: HTMLInputElement;
  let todoId = 0;
  // stores are the answer to nested reactivity
  const [todos, setTodos] = createStore<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: ++todoId, text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    // the setter function that comes with the store uses path syntax to change a specific value,
    // that way we dont have to create a new array every time we want to update a value
    setTodos(
      (todo) => todo.id === id,
      "completed",
      (completed) => !completed,
    );
  };

  return (
    <>
      <div>
        {/* @ts-ignore */}
        <input ref={input} />
        <button
          onClick={(_e) => {
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
              {/* this adds a closure to the onchange event, so we can pass in the id of the todo */}
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
