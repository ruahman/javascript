<template>
  <h3 @click="onClick">{{ msg }}</h3>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
  emits: ['iWasClicked'],
})
export default class Test extends Vue {
  msg = 'hello test';

  onClick() {
    this.$emit('iWasClicked', 773);
  }
}
</script>
