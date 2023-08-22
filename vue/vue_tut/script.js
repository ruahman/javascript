const app = Vue.createApp({
  data() {
    return {
      cssClass: "red",
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
      assignments: [
        { id: 1, text: "task 1", checked: false },
        { id: 2, text: "task 2", checked: false },
        { id: 3, text: "task 3", checked: false },
      ],
      checkedOptions: [],
      picked: "",
    };
  },
  computed: {
    computedProperty() {
      return "inc: " + this.inc;
    },
    completedAssignments() {
      return this.assignments.filter((assignment) => assignment.checked);
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
    toogle() {
      alert("toogle");
    },
    message(msg) {
      alert(msg);
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

app.component("test-component2", {
  props: {
    title: {
      type: String,
      default: "default title",
    },
  },
  template: `
    <button>{{title}}</button>
  `,
});

app.component("test-submit", {
  emits: ["submit"],
  template: `
    <form @submit.prevent="onSubmit">
      <input v-model="message" />
      <button type="submit">Submit</button>
    </form>
  `,
  methods: {
    onSubmit() {
      this.$emit("message", this.message);
    },
  },
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
