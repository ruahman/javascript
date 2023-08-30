<script setup>
import { useHello } from "@/composables/useHello.js";
let { sayHello } = useHello();
</script>
<template>
  <h1>Composable</h1>
  <div>
    <button @click="sayHello">say hello</button>
  </div>
</template>
