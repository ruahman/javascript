<script setup>
// setup is for composition api, think of it as a cleaner way to use the setup function
// otherwise you need to use the options api

import { onMounted, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
const message = ref("Hello World from composition API");

onMounted(() => {
  alert("mounted");
});

setTimeout(() => {
  message.value = "Hello World from composition API after 5 seconds";
}, 5000);

const clickHandler = () => {
  alert("clicked");
};
</script>

<template>
  <div>
    <h1>Home</h1>
    <input type="text" v-model="message" />
    <p>{{ message }}</p>
    <button @click="clickHandler">Click me</button>
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
</template>
