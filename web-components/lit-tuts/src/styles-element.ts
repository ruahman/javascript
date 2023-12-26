import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

// the styles you add to your component are automatically scoped to the shadow dom

const buttonStyles = css`
  .blue-button {
    color: white;

    background-color: blue;
  }

  .blue-button:disabled {
    background-color: grey;
  }
`;

@customElement("styles-element")
export class StylesElement extends LitElement {
  static mainColor = "red";

  // you define scoped styles in the static styles class field,
  // using the tagged template literal css function.
  // you cand define this as an array so that you can incorporate other styles.
  static styles = [
    buttonStyles,
    css`
      /* create styles for the host element, the element that owns the shadow dom.*/
      :host {
        display: block;
        /* you can inherit variables */
        background-color: var(--my-background, yellow);
        padding: 8px;
      }
      :host(.gray) {
        display: block;
        background-color: lightgray;
        padding: 8px;
      }
      :host(.blue) {
        background-color: aliceblue;
        color: darkgreen;
      }
      /* style elements in slot */
      ::slotted(*) {
        color: pink;
      }
      p {
        color: green;
      }
      div {
        color: ${unsafeCSS(StylesElement.mainColor)};
      }
    `,
  ];

  protected render() {
    console.log("render");
    return html`
      <p>I am green!</p>
      <div>I am red!</div>
      <button class="blue-button">I am blue!</button>
      <button class="blue-button" disabled>I am grey!</button>
      <slot></slot>
    `;
  }
}
