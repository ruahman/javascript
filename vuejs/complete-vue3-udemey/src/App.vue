<template>
  <!-- <form @submit.prevent="submit">
    <MyButton
      background="green"
      color="red"
      :disabled="disabled"
      @testEmit="testEmit"
    /> -->
  <!-- </form> -->
  <!-- <HelloWorld /> -->
  <!-- <Pokemon /> -->
  <Composition />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import MyButton from './components/MyButton.vue';
import Pokemon from './components/Pokemon.vue';
import Composition from './components/Composition.vue';

@Options({
  components: {
    MyButton,
    HelloWorld,
    Pokemon,
    Composition,
  },
})
export default class App extends Vue {
  disabled = false;

  submit() {
    alert('I was submitted');
  }

  testEmit(payload: string) {
    alert(payload);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
