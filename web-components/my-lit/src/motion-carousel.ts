import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("motion-carousel")
export class MotionCarousel extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      overflow: hidden;
      position: relative;
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

  render() {
    if (this.hasValidSelected()) {
      this.selectedInternal = this.selected;
    }
    return html`
      <div class="fit">
        <slot name="selected"></slot>
      </div>
    `;
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
}
