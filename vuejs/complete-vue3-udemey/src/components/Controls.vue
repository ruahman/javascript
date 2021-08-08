<template>
  <button>Likes {{ post.likes }}</button>
  <Hashtag
    :hashtag="hashtag"
    v-for="hashtag in post.hashtags"
    :key="hashtag"
    @hashTag="hashTag"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hashtag from './Hashtag.vue';

export default defineComponent({
  components: {
    Hashtag,
  },
  props: {
    post: { type: Object, required: true },
  },
  setup() {
    const hashTag = (payload: string) => {
      alert(payload);
    };
    return {
      hashTag,
    };
  },
});
</script>
