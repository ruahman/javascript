<template>
  <!-- <HelloWorld /> -->
  <!-- <Pokemon /> -->
  <!-- <Composition /> -->
  <!-- <MicroBlog /> -->
  <MyRoutes />
  <!-- <Form /> -->
  <!-- <MyVuex /> -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import Pokemon from './components/Pokemon.vue';
import Composition from './components/Composition.vue';
import MicroBlog from './components/MicroBlog.vue';
import Form from './components/Form.vue';
import MyRoutes from './components/MyRoutes.vue';
import MyVuex from './components/MyVuex.vue';

@Options({
  components: {
    HelloWorld,
    Pokemon,
    Composition,
    MicroBlog,
    Form,
    MyRoutes,
    MyVuex,
  },
})
export default class App extends Vue {}
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
