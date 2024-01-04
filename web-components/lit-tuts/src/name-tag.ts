import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("name-tag")
export class NameTag extends LitElement {
  @property()
  name = "Your name goes here";

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;

    // set reactive property, this will trigger a re-render
    this.name = input.value;
  }

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
      <input @input=${this.changeName} placeholder="Enter your name" />
    `;
  }
}
