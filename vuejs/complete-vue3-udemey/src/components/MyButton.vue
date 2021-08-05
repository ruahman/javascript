<template>
  <button :style="{ background, color }" :disabled="disabled" @click="onClick">
    My Button
  </button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
  emits: ['testEmit'],
  props: {
    background: String,
    color: String,
    disabled: {
      type: Boolean,
      required: true,
    },
    testEmit: Function,
  },
})
export default class MyButton extends Vue {
  onClick() {
    this.$emit('testEmit', 'foobar');
  }
}
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
}
button:hover {
  filter: brightness(125%);
}
</style>
