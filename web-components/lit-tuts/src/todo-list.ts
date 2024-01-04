import { html, css, LitElement } from "lit";
import { customElement, state, query, property } from "lit/decorators.js";

// type for the todo list items
type ToDoItem = {
  text: string;
  completed: boolean;
};

@customElement("todo-list")
export class TodoList extends LitElement {
  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

  // this is a state, it's not available from the outside,
  // but if you change it, the component will re-render
  @state()
  private _listItems = [
    { text: "Start Lit tutorial", completed: true },
    { text: "Make to-do list", completed: false },
  ];

  // hide completed items
  @property()
  hideCompleted = false;

  toggleCompleted(item: ToDoItem) {
    item.completed = !item.completed;

    // tell component to re-render,
    // since we didn't change the array itself
    this.requestUpdate();
  }

  addToDo() {
    // this triggers a re-render, because we changed the array
    this._listItems = [
      ...this._listItems,
      { text: this.input.value, completed: false },
    ];
    this.input.value = "";
  }

  // this maps to the #newitem element in the template
  @query("#newitem")
  input!: HTMLInputElement;

  setHideCompleted(e: Event) {
    this.hideCompleted = (e.target as HTMLInputElement).checked;
  }

  render() {
    const items = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems;
    const todos = html`
      <ul>
        ${items.map(
          (item) =>
            html` <li
              class=${item.completed ? "completed" : ""}
              @click=${() => this.toggleCompleted(item)}
            >
              ${item.text}
            </li>`,
        )}
      </ul>
    `;
    const caughtUpMessage = html` <p>You're all caught up!</p> `;
    const todosOrMessage = items.length > 0 ? todos : caughtUpMessage;

    return html`
      <h2>To Do</h2>
      ${todosOrMessage}
      <input id="newitem" aria-label="New item" />
      <button @click=${this.addToDo}>Add</button>
      <br />
      <label>
        <input
          type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}
        />
        Hide completed
      </label>
    `;
  }
}
