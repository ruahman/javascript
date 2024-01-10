import { html, css, LitElement } from "lit";
import type { TemplateResult } from "lit";

import { customElement, state } from "lit/decorators.js";
// for items that are not arrays
import { map } from "lit/directives/map.js";
import { range } from "lit/directives/range.js";
import { repeat } from "lit/directives/repeat.js";

@customElement("working-lists")
export class WorkingLists extends LitElement {
  static styles = css`
    /* playground-fold */
    :host {
      display: block;
      width: 400px;
      height: 400px;
    }
    #board {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 1fr);
      border: 2px solid #404040;
      box-sizing: border-box;
      height: 100%;
    }
    #board > div {
      padding: 2px;
    }
    .black {
      color: #ddd;
      background: black;
    }
    .white {
      color: gray;
      background: white;
    }
    /* playground-fold-end */
  `;

  @state()
  items = new Set(["Apple", "Banana", "Grape", "Orange", "Lime"]);

  @state()
  names = ["Chandler", "Phoebe", "Joey", "Monica", "Rachel", "Ross"];

  @state()
  friends = ["Harry", "Ron", "Hermione"];

  @state()
  pets = [
    { name: "Hedwig", species: "Owl" },
    { name: "Scabbers", species: "Rat" },
    { name: "Crookshanks", species: "Cat" },
  ];

  @state()
  includePets = true;

  @state()
  tasks = [
    { id: "a", label: "Learn Lit" },
    { id: "b", label: "Feed the cat" },
    { id: "c", label: "Go for a walk" },
    { id: "d", label: "Take a nap" },
  ];

  @state()
  things = [
    "Raindrops on roses",
    "Whiskers on kittens",
    "Bright copper kettles",
    "Warm woolen mittens",
  ];

  private _togglePetVisibility() {
    this.includePets = !this.includePets;
  }
  private _deleteThing(index: number) {
    this.things = this.things.filter((_, i) => i !== index);
  }

  private _sort(dir: number) {
    this.tasks.sort((a, b) => a.label.localeCompare(b.label) * dir);
    this.requestUpdate();
  }

  render() {
    const listItems: TemplateResult[] = [];
    this.friends.forEach((friend) => {
      listItems.push(html`<li>${friend}</li>`);
    });
    if (this.includePets) {
      this.pets.forEach((pet) => {
        listItems.push(html`<li>${pet.name} (${pet.species})</li>`);
      });
    }

    const getColor = (row: number, col: number) =>
      (row + col) % 2 ? "black" : "white";

    const getLabel = (row: number, col: number) =>
      `${String.fromCharCode(65 + col)}${8 - row}`;

    return html`
      <p>My unique fruits</p>
      <ul>
        ${map(this.items, (item) => html`<li>${item}</li>`)}
      </ul>
      <p>A list of names that include the letter "e"</p>
      <ul>
        ${this.names
          .filter((name) => name.match(/e/i))
          .map((name) => html`<li>${name}</li>`)}
      </ul>
      <button @click=${() => this._togglePetVisibility()}>
        ${this.includePets ? "Hide" : "Show"} pets
      </button>
      <p>My magical friends</p>
      <ul>
        ${listItems}
      </ul>
      <p>Let's play a game!</p>
      <div id="board">
        ${map(range(8), (row) =>
          map(
            range(8),
            (col) => html`
              <div class="${getColor(row, col)}">${getLabel(row, col)}</div>
            `,
          ),
        )}
      </div>
      <p>Things to do today:</p>
      <button @click=${() => this._sort(1)}>Sort ascending</button>
      <button @click=${() => this._sort(-1)}>Sort descending</button>
      <ul>
        ${repeat(
          this.tasks,
          (task) => task.id, // assign an id to each item sot that check box are moved with it.
          (task) => html`
            <li>
              <label><input type="checkbox" />${task.id}) ${task.label}</label>
            </li>
          `,
        )}
      </ul>
      <p>A few of my favorite things</p>
      <ul>
        ${map(
          this.things,
          (thing, index) => html`
            <li>
              ${thing}
              <button @click=${() => this._deleteThing(index)}>Delete</button>
            </li>
          `,
        )}
      </ul>
    `;
  }
}
