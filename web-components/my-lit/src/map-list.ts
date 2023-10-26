import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";

@customElement("map-list")
class MapList extends LitElement {
  @state()
  items = new Set(["Apple", "Banana", "Grape", "Orange", "Lime"]);

  render() {
    return html`
      <p>My unique fruits</p>
      <ul>
        ${map(this.items, (item: string) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}
