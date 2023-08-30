<script setup>
import store from "@/stores/myStore.js";

store.message = "this was changed from TestStore.vue";
</script>

<template>
  <p>{{ store.message }}</p>
</template>
