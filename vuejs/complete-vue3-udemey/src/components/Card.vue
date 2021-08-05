<template>
  <div class="card">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
    <div class="description">
      <slot name="description" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Card extends Vue {}
</script>

<style scoped>
.card {
  max-width: 200px;
}
</style>
