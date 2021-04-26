<template>
  <div class="lable">
    <div class="error">{{ error }}</div>
    <label :for="name">{{ name }}</label>
  </div>
  <input 
    :type="type" 
    :id="name"
    :value="value"
    @input="input"
  />
</template>

<script>
export default {
  emits:['update'],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    error: {
      type: String
    },
    rules: {
      type: Object,
      default: {}
    }
  },

  // lifecycle hooks
  // gets called when component is created the first time
  created(){
    this.$emit('update', {
      name: this.name.toLowerCase(),
      value: this.value,
      error: this.validate(this.value)
    })
  },

  methods: {
    input($event){
      this.$emit('update', {
        name: this.name.toLowerCase(),
        value: $event.target.value,
        error: this.validate($event.target.value)
      })
    },
    validate(value){
      if(this.rules.required && value.length === 0){
        return "value is required"
      }
      if(this.rules.min && value.length < this.rules.min){
        return `the min lenght is ${this.rules.min}`
      }
    }
  },
  // computed:{
  //   error(){
  //     if(this.rules.required && this.value.length === 0){
  //       return "value is required"
  //     }
  //     if(this.rules.min && this.value.length < this.rules.min){
  //       return `the min lenght is ${this.rules.min}`
  //     }
  //   }
  // }
}
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
  justify-content: space-between;
}
.error {
  color: red;
}
.input {
  width: 100%;
}
input {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid silver;
  margin: 2px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
}
</style>