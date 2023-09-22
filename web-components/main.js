const template = document.createElement("template");
template.innerHTML = `
  <style>
  label {
    color: red;
    display: block;
  }
  .description {
   font-size: 0.65rem;
  }
  </style>
  <label>
    <input type="checkbox" />
    <slot></slot>
    <span class="description">
      <slot name="description"></slot>
    </span>
  </label>
`;

class TodoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
    this.$checkbox = shadow.querySelector("input");
  }

  static get observedAttributes() {
    return ["checked"];
  }

  attributeChangedCallback(name, _, newValue) {
    if (name === "checked") {
      this.updateChecked(newValue);
    }
  }

  connectedCallback() {
    console.log("connected");
  }

  disconnectedCallback() {
    console.log("disconnected");
  }

  updateChecked(value) {
    console.log("value", value);
    if (value === "true") {
      this.$checkbox.checked = true;
    } else {
      this.$checkbox.checked = false;
    }
  }
}

customElements.define("todo-item", TodoItem);

const $item = document.querySelector("todo-item");
let checked = true;
$item.setAttribute("checked", checked);

setInterval(() => {
  $item.setAttribute("checked", checked);
  checked = !checked;
}, 2000);

const $item2 = document.querySelectorAll("todo-item")[2];
setTimeout(() => {
  $item2.remove();
}, 5000);
