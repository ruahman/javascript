<script setup>
import counter from "@/stores/counterStore";
import { useCounterStore } from "@/stores/piniaStore";
let piniaCounter = useCounterStore();
</script>
<template>
  <h1>Counter</h1>
  <p>counter goes here: {{ counter.count }}</p>
  <button @click="counter.increment()">increment</button>
  <p>pinia counter: {{ piniaCounter.count }}</p>
  <p>pinia count down: {{ piniaCounter.countDown }}</p>
  <button @click="piniaCounter.increment()">increment</button>
</template>
