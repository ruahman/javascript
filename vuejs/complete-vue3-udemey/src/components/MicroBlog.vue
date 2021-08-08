<template>
  <Card v-for="post in store.state.posts" :key="post.id">
    <template v-slot:title>
      {{ post.title }}
    </template>
    <template v-slot:content>
      {{ post.content }}
    </template>
    <template v-slot:description>
      <Controls :post="post" />
    </template>
  </Card>
</template>

<script lang="ts">
import { store } from '../store';
import Card from './Card.vue';
import Controls from './Controls.vue';

export default {
  components: {
    Card,
    Controls,
  },
  setup() {
    return {
      store,
    };
  },
};
</script>

<style scoped></style>
