import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { dateConverter } from "./date-converter.js";

@customElement("date-display")
export class DateDisplay extends LitElement {
  // @property({ attribute: false })
  @property({ converter: dateConverter(navigator.language), reflect: true })
  date = new Date();

  // @property({ type: String, attribute: "date-str" })
  // dateStr = "";

  // willUpdate(changed: PropertyValues<this>) {
  //   if (changed.has("dateStr") && this.dateStr) {
  //     this.date = new Date(this.dateStr);
  //   }
  // }

  render() {
    const locale = "en-US";
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return html`
      <p>The given date is: ${this.date.toLocaleDateString(locale, options)}</p>
    `;
  }
}
