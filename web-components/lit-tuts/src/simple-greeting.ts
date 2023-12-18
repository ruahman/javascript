import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("simple-greeting")
export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      font-family: Roboto;
      font-size: 16px;
      color: #FFF;
    
  `;

  @property()
  name = "World";

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
