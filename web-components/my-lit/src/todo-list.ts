import { LitElement, html, css } from "lit";
import { customElement, state, property, query } from "lit/decorators.js";

type ToDoItem = {
  text: string;
  completed: boolean;
};

@customElement("todo-list")
export class ToDoList extends LitElement {
  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

  @state()
  private _listItems = [
    { text: "Make to do list", completed: true },
    { text: "Completed lit tutorial", completed: true },
  ];

  @property()
  hideCompleted = true;

  render() {
    const items = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems;

    const todos = html`
      <ul>
        ${items.map(
          (item) => html`
            <li
              class=${item.completed ? "completed" : ""}
              @click=${() => this.toogleCompleted(item)}
            >
              ${item.text}
            </li>
          `,
        )}
      </ul>
    `;

    const caughtUpMessage = html`<p>you are done</p>`;

    const todosOrMessage = items.length > 0 ? todos : caughtUpMessage;

    return html`
      <h2>To do</h2>
      ${todosOrMessage}
      <input id="newitem" label="New Item" />
      <button @click=${this.addTodo}>Add</button>
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

  toogleCompleted(item: ToDoItem) {
    console.log("toogle");
    item.completed = !item.completed;
    this.requestUpdate();
  }

  setHideCompleted(e: Event) {
    this.hideCompleted = (e.target as HTMLInputElement).checked;
  }

  @query("#newitem")
  input!: HTMLInputElement;

  addTodo() {
    console.log("add todo???");
    this._listItems = [
      ...this._listItems,
      { text: this.input.value, completed: false },
    ];
    console.log(this._listItems);
    this.input.value = "";
  }
}
