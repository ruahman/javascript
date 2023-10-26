import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("array-list")
class ArrayList extends LitElement {
  @state()
  names = ["Chandler", "Phoebe", "Joey", "Monica", "Rachel", "Ross"];

  render() {
    return html`
      <p>A list of names that include the letter "e"</p>
      <ul>
        ${this.names
          .filter((name) => name.match(/e/i))
          .map((name) => html`<li>${name}</li>`)}
      </ul>
    `;
  }
}
