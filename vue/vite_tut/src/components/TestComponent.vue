<script setup>
import { ref } from "vue";
defineProps({
  title: { type: String, default: "hello world" },
});

let text = ref("enter text here");
let counter = ref(0);

function increment() {
  counter.value++;
}
</script>
<template>
  <p>this is my test component</p>
  <h1>{{ title }}</h1>
  <p id="text">{{ text }}</p>
  <input type="text" v-model="text" />
  <div id="counter">{{ counter }}</div>
  <button @click="increment"></button>
</template>
