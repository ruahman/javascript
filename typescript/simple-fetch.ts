const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function logTodo(id: number, title: string, completed: boolean): void {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
}

const res = await fetch(url);
const data: Todo = await res.json();

logTodo(data.id, data.title, data.completed);
