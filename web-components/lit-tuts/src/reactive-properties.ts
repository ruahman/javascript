import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

// // Lit components receive input and store their state as JavasScript class fields or properties.
// // Reactive properties are properties that can trigger the reactive update cycle when they change.
//
// // Lit also supports internal reactive state.
//
// // a property change can trigger a reactive update cycle, which cause the component to rerender itself.
//
// // Mutating and object or array doesn't change the object reference, so it won't trigger a reactive update.
// // To trigger a reactive update, you must replace the object or array with a new one.
// // or manually call requestUpdate().
// // it better to use immutable data structures, that way only the propeties that change will go throught the reactive update cycle???
//
@customElement("reactive-properties")
export class ReactiveProperties extends LitElement {
  // reactive properties.
  // an html attribute is associated with it.
  // Reactive properties should be set by the user of the component.
  @property()
  name?: string;

  // if you want to give Observed attribute a different name.
  @property({ attribute: "my-name" })
  myName = "Ogden";

  // No observed attribute for this property
  @property({ attribute: false })
  myData = {};

  // Use the default converter, converts string to number.
  @property({ type: Number })
  count = 0;

  // if you internaly change the property it will refelct to the html attribute.
  // reflected properties are usful because attributes are visable to css and the DOM querySelector
  @property({ type: Boolean, reflect: true })
  active: boolean = false;

  // this is internal state. this also triggers updates.
  // an html attribute is not associated with it.
  // Internal reactive state should be set by the component itself.
  @state()
  private _count = 0;

  static styles = css`
    :host {
      display: inline-block;
    }

    :host([active]) {
      border: 1px solid red;
    }
  `;

  render() {
    return html`
      <span>Active: ${this.active}</span>
      <button @click="${() => (this.active = !this.active)}">
        Toggle active
      </button>
    `;
  }
}
