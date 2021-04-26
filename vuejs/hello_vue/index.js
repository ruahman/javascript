
import * as Vue from 'vue/dist/vue.esm-bundler.js'  


const Num = {
  props: ['number'],
  template: `
    <button 
      v-on:click="click"
      v-bind:class="getClass(number)">
      {{ number }}
    </button>
    <span v-if="isEven(number)">Even</span>
    <span v-else>Odd</span>
  `,
  methods: {
    click(){
      // console.log(this.number)
      this.$emit('chosen', this.number) 
    },
    getClass(num){
      return this.isEven(num) ? 'blue' : 'red'
    },
    isEven(val){
      return val % 2 === 0
    }
  }
}

const app = Vue.createApp({
  components: {
    Num
  },
  template: `

      <button v-on:click="increment(1)">Increment</button>
      <p>{{count}}</p>
      <input v-model="value"/>
      {{ value }}
      <input type="radio" v-model="radio" value="a"/>
      <input type="radio" v-model="radio" value="b"/>
      {{ radio }}
      <num v-for="number in numbers" 
           v-bind:number="number" 
           v-on:chosen="chosen"
           />
      <div v-for="x in chosenValues">
        {{ x }}
      </div>
  `,
  data(){
    return {
      count: 0,
      value: 'user',
      radio: 'a',
      numbers: [1,2,3,4,5,6,7,8,9,10],
      chosenValues: []
    }
  },
  computed: {
    evenList(){
      return this.numbers.filter(num => this.isEven(num))
    }
  },
  methods: {
    chosen(val){
      // console.log(val) 
      this.chosenValues.push(val)
    },
    input($event){
      this.value = $event.target.value 
      if(this.value.length < 5) {
        this.error = "must be greater than 5"
      }
      else {
        this.error = ''
      }
    },
    getClass(num){
      return this.isEven(num) ? 'blue' : 'red'
    },
    increment(val=1){
      this.count += val
    },
    isEven(val){
      return val % 2 === 0
    }
  }
})
app.mount('#app')
