<script setup>
defineProps({
  message: String,
});

let emit = defineEmits(["foo"]);
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="emit('foo')">emit foo</button>
  </div>
</template>
