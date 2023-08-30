<script setup>
// setup is for composition api, think of it as a cleaner way to use the setup function
// otherwise you need to use the options api

import { onMounted, ref, watch } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Composition from "@/components/Composition.vue";

const message = ref("Hello World from composition API");

const myId = ref(null);

watch(message, (newValue, oldValue) => {
  console.log("new value", newValue);
  console.log("old value", oldValue);
});

onMounted(() => {
  console.log("mounted");
  console.log(myId.value);
  myId.value.value = "moundet";
});

setTimeout(() => {
  message.value = "Hello World from composition API after 5 seconds";
}, 5000);

const clickHandler = () => {
  alert("clicked");
};

function foo() {
  console.log("foo was called");
}
</script>

<template>
  <div>
    <h1>Home</h1>
    <input ref="myId" type="text" v-model="message" />
    <p>{{ message }}</p>
    <button @click="clickHandler">Click me</button>
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <Composition message="hello from composition api" @foo="foo" />
  </div>
</template>
