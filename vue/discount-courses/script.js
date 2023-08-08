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
    };
  },
  created() {
    console.log("created: ", this.valueToReturn);
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

const appInstance = app.mount("#app");

console.log(appInstance.valueToReturn);
