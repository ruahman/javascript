// create a template element
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
  }

  // tell the browser which attributes we want to observe
  static get observedAttributes() {
    return ["checked"];
  }

  // every time the attribute changes, this method is called
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "checked") {
      if (oldValue !== newValue) {
        this.updateChecked(newValue);
      }
    }
  }

  // called when the element is added to the DOM
  connectedCallback() {
    console.log("connected");

    // close means that the shadow dom is not accessible from outside
    const shadow = this.attachShadow({ mode: "closed" });

    shadow.appendChild(template.content.cloneNode(true));

    this.$checkbox = shadow.querySelector("input");
  }

  // called every time the element is removed from the DOM
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
