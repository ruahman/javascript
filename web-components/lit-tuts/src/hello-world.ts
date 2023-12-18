import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

// LitElement inherits from ReactiveElement, which implements reactive properties,
// ReactiveElement inherits from HTMLElement, which has all the standard HTML properties and methods
// Lit uses the shadow DOM.  Shadow DOM lets an element create its own, isolatedd DOM tree that
// is separate from the main document tree.
@customElement("hello-world")
export class HelloWorld extends LitElement {
  static styles = css`
    p {
      font-family: Roboto;
      font-size: 16px;
      color: #FFF;
    
  `;

  // this is a property that I can access from the outside
  @property()
  name?: string = "World";

  // this method returns a single TemplateResult object.
  render() {
    // this is a tagged template literal
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
