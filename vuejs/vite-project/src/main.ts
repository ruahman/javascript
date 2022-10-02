import { createApp } from 'vue'
import 'vue/dist/vue.esm-bundler.js'
import './style.css'
// import App from './App.vue'

const Hello = {
  props: ['greeting'],
  template: `
    <p>{{ greeting }}!</p>
    <button v-on:click="emitChange">Click</button>
  `,
  methods: {
    emitChange(){
      this.$emit('chosen', 'you clicked me')
    }
  }
}

const app = createApp({
  components: {
    Hello
  },
  template:`
    <Hello greeting="foobar" v-on:chosen="chosen" />
    <h1>hello {{ msg }}</h1>
    <button v-on:click="increment(5)">Increment</button>
    <p>{{ count }}</p>
    <div v-if="isEven(count)">
      Even
    </div>
    <div v-else>
      Odd
    </div>
    <div v-for="number in numbers">
      <span v-bind:class="getClass(number)">{{ number }}</span>
    </div>
    <div v-for="number in evenList">
      {{ number }}
    </div>
    <input type="text" v-model="value"/>
    <p>{{ value }}</p>
    <input type="radio" v-model="radio" value="b"/>
    <input type="radio" v-model="radio" value="c"/>
    {{ radio }}
    <input type="checkbox" v-model="check" />
    {{ check }}
  `,
  methods: {
    chosen(payload: string){
      alert(payload)
    },
    increment(val: number){
      this.count = this.count + val;
    },
    isEven(count: number): boolean {
      return count % 2 === 0
    },
    getClass(num: number): string {
      return this.isEven(num) ? 'blue' : 'red'
    }
  },
  computed: {
    evenList(){
      return this.numbers.filter((num: number) => this.isEven(num))
    }
  },
  data(){
    return {
      msg: 'world',
      count: 0,
      numbers: [1,2,3,4,5,6,7,8,9,10],
      value: 'user',
      radio: 'a',
      check: true,
    }
  }
})

// createApp(App).mount('#app')
// const app = createApp({
//   template: `
//     <h1>hello test {{ msg }} </h1>
//   `,

//   data() {
//     return {
//       msg: 'world test'
//     }
//   }
// })

app.mount('#app')
