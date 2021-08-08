<template>
  <h3>{{ msg }}</h3>
  <h1>{{ message }}</h1>
  <button @click="decrement">-</button>
  {{ count }}
  <button @click="increment">+</button>
  <button @click="hello">click</button>
  {{ name }}
  <Test @iWasClicked="iWasClicked" />
  <div v-if="isEven(count)">Even number</div>
  <div v-else>Odd</div>
  <div v-for="number in numbers" :class="getClass(number)" :key="number">
    <div>{{ number }}</div>
  </div>
  <div v-for="number in evenList" :key="number">
    {{ number }}
  </div>
  <input :value="value" @input="input" />
  <h3>{{ value }}</h3>
  <input v-model="value" />
  <input type="radio" v-model="radioValue" value="a" />
  <input type="radio" v-model="radioValue" value="b" />
  {{ radioValue }}
  <input type="checkbox" v-model="checkValue" />
  {{ checkValue }}
  <!-- <input type="text" v-model.number="num" /> -->
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Test from './Test.vue';

@Options({
  components: {
    Test,
  },
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  message = 'hello type script';
  firstName = 'diego';
  lastName = 'vila';
  count = 0;
  numbers = [1, 2, 3, 4, 5];
  value = 'user';
  radioValue = '';
  checkValue = false;

  mounted() {
    console.log('mounted');
  }

  decrement() {
    this.count -= 1;
  }

  increment() {
    this.count += 1;
  }

  isEven(number: number) {
    return number % 2 === 0;
  }

  hello() {
    alert('hello world');
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }

  get evenList() {
    return this.numbers.filter(x => x % 2 === 0);
  }

  getClass(number: number) {
    return this.isEven(number) ? 'blue' : 'red';
  }

  input($event: any) {
    this.value = $event.target.value;
  }

  iWasClicked(payload: number) {
    alert(`I was clicked ${payload}`);
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

.blue {
  color: blue;
}

.red {
  color: red;
}
</style>
