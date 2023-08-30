<script setup>
import TestStore from "@/components/TestStore.vue";
import store from "@/stores/myStore.js";
</script>
<template>
  <h1>Stores: {{ store.message }}</h1>
  <TestStore />
</template>
