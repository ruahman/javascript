<template>
  <my-input 
    name="diego"
    :rules="{}" />
  <my-button 
    background="red"
    color="blue" />
</template>

<script>
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'

export default {
  components: {
    MyButton,
    MyInput
  }
}
</script>

<style scoped>
</style>