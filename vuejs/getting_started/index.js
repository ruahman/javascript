import * as Vue from 'vue/dist/vue.esm-bundler.js'

// components are just object with properties,
// template, data, methods, computed, props, etc
const Hello = {
  props: ['greeting'],
  template: "<p>{{ greeting }}</p>"
}

const Num = {
  props:['number'],
  template: `
    <button @click="click">
      {{ number }} 
    </button>
  `,
  methods: {
    click(){
      this.$emit('chosen', this.number)
    }
  }

}

const app = Vue.createApp({
  components: {
    Hello,
    Num
  },
  template: `
    <Hello greeting="hello world"/>
    <h1>From inside: {{ msg }}</h1>
    <button @click="increment">Increment</button>
    <p>{{ count }}</p>
    <div v-if="isEven(count)">
      even
    </div>
    <div v-else>
      odd
    </div>
    <div v-for="number in numbers" :class="isEven(number) ? 'blue' : 'red'">
      {{ number }}
      <span v-if="isEven(number)">even</span>
      <span v-else >odd</span>
    </div> 
    <div v-for="number in evenList">
      {{ number }}
      <span v-if="isEven(number)">even</span>
      <span v-else >odd</span>
    </div> 
    <input 
      :value="value"
      @input="input"
    />
    <input 
      v-model="value"
    />
    {{ value }}
    <div class="red">{{ error }}</div>
    <input type="radio" 
      v-model="radio" 
      value="a" 
    />
    <input type="radio" 
      v-model="radio" 
      value="b" 
    />
    {{ radio }}
    <input type="checkbox" 
      v-model="check" 
      value="d" 
    />
    <input type="checkbox" 
      v-model="check" 
      value="f" 
    />
    {{ check }}
    
    <num 
      v-for="number in numbers" 
      :class="isEven(number) ? 'blue' : 'red'" 
      :number="number" 
      @chosen="addNumber"
    />
    {{ list }}
  `,
  data(){
    return {
      msg: "foobar from inside",
      count: 0,
      numbers: [1,2,3,4,5,6,7,8,9,10],
      value: 'value',
      radio: 'a',
      check: ['f'],
      list: []
      // error: ''
    }
  },
  computed: {
    evenList(){
      return this.numbers.filter(num => this.isEven(num))
    },
    error(){
      if(this.value.length < 5){
        return "problems"
      }
      else {
        return ""
      }
    }
  },
  methods: {
    addNumber(number){
      this.list.push(number)
    },
    input($event){
      this.value = $event.target.value
    },
    isEven(num){
      return num % 2 === 0
    },
    increment(){
      this.count += 1
    }
  }
})

app.mount('#app')