<template>
  <span @click="click">MyVuex</span>
  {{ data.count }}
  <span @click="fetchPosts">fetchPosts</span>
  <span v-if="isEven">Even</span>
  <span v-else>Odd</span>
</template>
<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const { state, commit, dispatch, getters } = useStore();

    const click = () => {
      commit('posts/increment', 1);
    };

    const fetchPosts = () => {
      dispatch('posts/fetchPosts', 733);
    };

    onMounted(() => {
      fetchPosts();
    });

    return {
      data: state.posts,
      commit,
      click,
      fetchPosts,
      isEven: computed(() => getters['posts/isEven']),
    };
  },
});
</script>

<style scoped></style>
