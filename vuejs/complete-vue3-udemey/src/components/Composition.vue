<template>
  <div>{{ msg }}</div>
  <input v-model="msg" />
  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
  {{ total }}
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import { useNumbers } from './useNumbers';
import { useCount } from './useCount';

export default {
  // called only once
  setup() {
    const { numbers, increase } = useNumbers();
    const { count, increment } = useCount();

    // for primative values and arrays
    const msg = ref('hello world');

    const total = computed(() => count.value + numbers.a + numbers.b);

    return {
      msg,
      count,
      increment,
      numbers,
      increase,
      total,
    };
  },
};
</script>

<style scoped>
button {
  height: 200px;
  width: 200px;
  font-size: 40px;
}
</style>
