<script setup>
import { provide } from "vue";
import TestInject from "@/components/TestInject.vue";

provide("message", "Hello from provide");
</script>

<template>
  <TestInject />
</template>
