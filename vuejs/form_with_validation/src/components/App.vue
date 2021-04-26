<template>
  <form @submit.prevent="submit">
    <my-input 
      name="username" 
      :rules="{ required: true, min: 5 }"
      :value="username.value"
      :error="username.error"
      @update="update"
    />
    <my-input 
      name="password" 
      :rules="{ required: true, min: 5 }"
      :value="password.value"
      :error="password.error"
      type="password"
      @update="update"
    />
    <my-button 
      background="darkslateblue"
      color="white"
      :disabled="!valid"
    />
  </form>
</template>

<script>
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'

export default {
  computed: {
    valid(){
      return (
        !this.username.error &&
        !this.password.error
      )
    }
  },
  methods: {
    submit($event){
      // $event.preventDefault()
      console.log('submit')
    },
    update({name, value, error}){
      this[name].value = value
      this[name].error = error
    }
  },
  components: {
    MyButton,
    MyInput
  },
  data(){
    return {
      username: {
        value: 'user',
        error: ''
      },
      password: {
        value: 'pass',
        error: ''
      }
    }
  }
}
</script>

<style scoped>
button {
  padding: 10px 40px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
}
button:disabled {
  opacity: 0.5;
}
button:hover {
  filter: brightness(125%);
}
</style>