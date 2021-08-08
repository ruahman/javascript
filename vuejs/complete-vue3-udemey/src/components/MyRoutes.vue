<template>
  <router-link :to="{ name: 'hello' }">hello</router-link>
  <router-link :to="{ name: 'routeProp', params: { msg: 'hello world' } }">
    route params</router-link
  >
  <router-link to="/posts">posts</router-link>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {},
});
</script>
