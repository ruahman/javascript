<script setup>
import { inject } from "vue";

let message = inject("message");
</script>
<template>
  <h1>provice and inject</h1>
  <div>{{ message }}</div>
</template>
