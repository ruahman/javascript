import { reactive } from "vue";

let counter = reactive({
  count: 0,

  increment() {
    console.log("incrementing");
    this.count++;
  },
});

export default counter;
