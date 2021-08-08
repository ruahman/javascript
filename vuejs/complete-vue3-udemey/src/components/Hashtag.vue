<template>
  <div @click="setHash">#{{ hashtag }}</div>
</template>

<script lang="ts">
export default {
  props: {
    hashtag: { type: String },
  },
  setup(props, ctx) {
    const setHash = () => {
      ctx.emit('hashTag', props.hashtag);
    };

    return {
      setHash,
    };
  },
};
</script>
