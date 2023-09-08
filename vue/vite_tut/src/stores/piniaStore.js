import { defineStore } from "pinia";

export let useCounterStore = defineStore("counter", {
  // data
  state() {
    return {
      count: 0,
    };
  },
  // actions
  actions: {
    increment() {
      console.log("pinia incrementing");
      this.count++;
    },
  },
  // computed properties
  getters: {
    countDown() {
      return 10 - this.count;
    },
  },
});
