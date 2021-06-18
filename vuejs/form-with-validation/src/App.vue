<template>
  <div>
    <h1>this should be quick this wow that was quick</h1>
    <my-button />
    {{ title }}
    <MyForm @update="update" />
  </div>
</template>

<script>
import MyButton from './MyButton.vue';
import MyForm from './MyForm.vue';

export default {
  components: {
    MyButton,
    MyForm,
  },
  methods: {
    update(payload) {
      alert(payload.text);
    },
  },
  data() {
    return {
      title: 'hellow worllds',
    };
  },
};
</script>

<style scoped></style>
