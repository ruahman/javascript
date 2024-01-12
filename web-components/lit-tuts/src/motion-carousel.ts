import { html, css, LitElement, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("motion-carousel")
export class MotionCarousel extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      overflow: hidden;
      position: relative;

      /* Defaults */
      width: 200px;
      height: 200px;
      border-radius: 4px;
      background: gainsboro;
      cursor: pointer;
    }

    .fit {
      position: relative;
      height: 100%;
      width: 100%;
    }

    ::slotted(*) {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }
  `;

  private selectedInternal = 0;
  @property({ type: Number })
  selected = 0;

  get maxSelected() {
    return this.childElementCount - 1;
  }

  hasValidSelected() {
    return this.selected >= 0 && this.selected <= this.maxSelected;
  }

  private previous = 0;
  protected updated(changedProperties: PropertyValues) {
    if (changedProperties.has("selected") && this.hasValidSelected()) {
      this.updateSlots();
      this.previous = this.selected;
    }
  }

  private updateSlots() {
    this.children[this.previous]?.removeAttribute("slot");
    this.children[this.selected]?.setAttribute("slot", "selected");
  }

  private clickHandler(e: MouseEvent) {
    const i = this.selected + (Number(!e.shiftKey) || -1);
    this.selected = i > this.maxSelected ? 0 : i < 0 ? this.maxSelected : i;

    // this is so you can send an event out to code that may be listening to carousel changes
    const change = new CustomEvent("change", {
      detail: this.selected,
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(change);
  }

  render() {
    if (this.hasValidSelected()) {
      this.selectedInternal = this.selected;
    }
    return html`
      <div class="fit">
        <slot name="selected" @click=${this.clickHandler}></slot>
      </div>
    `;
  }
}
