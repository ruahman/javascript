import { html, css, LitElement, PropertyValues } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { animate } from "@lit-labs/motion";

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

    .selected {
      top: -100%;
    }
  `;

  @query('slot[name="selected"]', true)
  private selectedSlot!: HTMLSlotElement;

  @query('slot[name="previous"]', true)
  private previousSlot!: HTMLSlotElement;

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

  // private updateSlots() {
  //   this.children[this.previous]?.removeAttribute("slot");
  //   this.children[this.selected]?.setAttribute("slot", "selected");
  // }

  private updateSlots() {
    // unset old slot state

    this.selectedSlot.assignedElements()[0]?.removeAttribute("slot");

    this.previousSlot.assignedElements()[0]?.removeAttribute("slot");

    // set slots

    this.children[this.previous]?.setAttribute("slot", "previous");

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

  private left = 0;
  render() {
    const p = this.selectedInternal;
    const s = (this.selectedInternal = this.hasValidSelected()
      ? this.selected
      : this.selectedInternal);
    const shouldMove = this.hasUpdated && s !== p;
    const atStart = p === 0;
    const toStart = s === 0;
    const atEnd = p === this.maxSelected;
    const toEnd = s === this.maxSelected;
    const shouldAdvance =
      shouldMove && (atEnd ? toStart : atStart ? !toEnd : s > p);
    const delta = (shouldMove ? Number(shouldAdvance) || -1 : 0) * 100;
    this.left -= delta;
    const animateLeft = `${this.left}%`;
    const selectedLeft = `${-this.left}%`;
    const previousLeft = `${-this.left - delta}%`;
    return html`
      <div
        class="fit"
        ${animate()}
        @click=${this.clickHandler}
        style=${styleMap({ left: animateLeft })}
      >
        <div class="fit" style=${styleMap({ left: previousLeft })}>
          <slot name="previous"></slot>
        </div>
        <div class="fit selected" style=${styleMap({ left: selectedLeft })}>
          <slot name="selected"></slot>
        </div>
      </div>
    `;
  }
}
