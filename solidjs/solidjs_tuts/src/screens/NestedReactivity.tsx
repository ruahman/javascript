import { For, createSignal } from "solid-js";

export function NestedReactivity() {
  const [todos, setTodos] = createSignal<any>([]);
  let input: HTMLInputElement;
  let todoId = 0;

  // add nested signals to the todo list
  const addTodo = (text: string) => {
    const [completed, setCompleted] = createSignal(false);
    // @ts-ignore
    setTodos([...todos(), { id: ++todoId, text, completed, setCompleted }]);
  };

  // toggle nested signal
  const toggleTodo = (id: number) => {
    const todo = todos().find((t: any) => t.id === id);
    if (todo) todo.setCompleted(!todo.completed());
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
      <For each={todos()}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`);
          return (
            <div>
              <input
                type="checkbox"
                checked={todo.completed()}
                onchange={[toggleTodo, id]}
              />
              <span
                style={{
                  "text-decoration": todo.completed() ? "line-through" : "none",
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
