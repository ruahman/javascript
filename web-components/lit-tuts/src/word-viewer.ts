import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("word-viewer")
export class WordViewer extends LitElement {
  @state() private playDirection: -1 | 1 = 1;
  @state() private idx = 0;
  @property() words = "initial value";

  static styles = css`
    :host {
      background-color: white;
      color: violet;
      cursor: pointer;
      display: block;
    }
    pre {
      padding: 0.2em;
    }
    .backwards {
      color: white;
      background-color: violet;
    }
  `;

  tickToNextWord = () => {
    this.idx += this.playDirection;
  };

  private intervalTimer?: number;

  connectedCallback() {
    super.connectedCallback();
    this.intervalTimer = setInterval(this.tickToNextWord, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.intervalTimer);
    this.intervalTimer = undefined;
  }

  switchPlayDirection() {
    console.log("switchPlayDirection");
    this.playDirection *= -1;
  }

  render() {
    const splitWords = this.words.split(".");
    const idx =
      ((this.idx % splitWords.length) + splitWords.length) % splitWords.length;
    const word = splitWords[idx];
    return html`<pre
      class="${classMap({ backwards: this.playDirection === -1 })}"
      @click=${this.switchPlayDirection}
    >
${word}</pre
    >`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "word-viewer": WordViewer;
  }
}
