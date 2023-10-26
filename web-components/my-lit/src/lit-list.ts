import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("lit-list")
class LitList extends LitElement {
  render() {
    return html`
      <h1>array</h1>
      <p>${["✨", "🔥", "❤️"]}</p>
      <h2>Set</h2>
      <p>${new Set(["A", "B", "C"])}</p>
      <h2>Generator</h2>
      <p>
        ${(function* () {
          for (let i = 1; i < 4; i++) yield i;
        })()}
      </p>
    `;
  }
}
