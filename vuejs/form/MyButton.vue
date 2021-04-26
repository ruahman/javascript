<template>
  <button
    v-bind:style="{ background, color}">
    Button
  </button>
</template>

<script>
export default {
  props: {
    background: {
      type: String
    },
    color: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  }
}
</script>