<template>
  <div>
    <label :for="name">{{ name }}</label>
  </div>
  <input :id="name" name="username" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    rules: {
      type: Object,
      default: {}
    }
  }
}
</script>