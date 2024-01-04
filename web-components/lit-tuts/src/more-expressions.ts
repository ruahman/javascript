import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("more-expressions")
export class MoreExpressions extends LitElement {
  @property()
  checked: boolean = false;

  setChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
  }

  render() {
    return html`
      <div>
        <!-- if checked then, disabled goes away -->
        <input type="text" ?disabled=${!this.checked} value="Hello there." />
      </div>
      <label
        ><input type="checkbox" @change=${this.setChecked} /> Enable
        editing</label
      >
    `;
  }
}
