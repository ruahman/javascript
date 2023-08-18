// const RootComponent = {};

// const app = Vue.createApp(RootComponent);

// const rootComponent = app.mount("#app");

const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      inc: 1,
      hover: "hover me",
      inputText: "input text",
      visable: false,
      items: ["item1", "item2", "item3"],
      html: "<h1>hello world</h1>",
      value_x: 0,
      dog: {
        breed: "dog",
        age: 5,
        color: "black",
      },
      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      checkedOptions: [],
      picked: "",
    };
  },
  computed: {
    computedProperty() {
      return "inc: " + this.inc;
    },
  },
  created() {
    console.log("created: ", this.value);
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 2000);
  },
  methods: {
    increment() {
      this.inc++;
    },
  },
});

app.component("test-component", {
  data() {
    return {
      propertyName: 1,
    };
  },
  props: ["title"],
  template: `
    <button v-on:click="propertyName++; $emit('increase')">
      <slot></slot>
      click {{title}} {{propertyName}} 
    </button>
  `,
});

app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});

app.directive("arguments", {
  mounted(el, binding, vnode) {
    console.log(binding.value);
    el.innerHTML =
      "value: " +
      binding.arg +
      "<br/>" +
      binding.value +
      "<br/>" +
      // JSON.stringify(binding) +
      "<br/>" +
      JSON.stringify(binding.modifiers);
  },
});

const appInstance = app.mount("#app");

console.log(appInstance.valueToReturn);

appInstance.value = 555;
console.log("$data: ", appInstance.$data.value);

console.log(appInstance.inc);

appInstance.increment();
appInstance.increment();
appInstance.increment();

console.log(appInstance.inc);
