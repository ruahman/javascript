<template>
  <form @submit.prevent="submit">
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  emits: ['update'],
  methods: {
    submit() {
      this.$emit('update', {
        text: 'this is an update',
      });
    },
  },
};
</script>
