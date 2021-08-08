<template>
  <form @submit.prevent="submit">
    <MyButton
      background="green"
      color="red"
      :disabled="disabled"
      @testEmit="testEmit"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyButton from './MyButton.vue';

export default defineComponent({
  components: {
    MyButton,
  },
  setup() {
    const disabled = false;

    const submit = () => {
      alert('I was submitted');
    };

    const testEmit = (payload: string) => {
      alert(payload);
    };

    return {
      submit,
      testEmit,
      disabled,
    };
  },
});
</script>
