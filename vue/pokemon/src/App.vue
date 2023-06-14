<style scoped></style>
<template>
  <div></div>
  <div></div>
  <div></div>
  <button @click="test">click me</button>
</template>

<script setup lang="ts">
  import {reactive} from "vue"
  const API = "https://pokeapi.co/api/v2/pokemon";
  const IDs = [1,4,7];

  interface pokemon {
    id: string,
    name: string,
    sprite: string,
    types: string[]
  }

  // let pokemon = reactive([{
  //   id: "",
  //   name: "",
  //   sprite: "",
  //   types: [""]
  // }])
  let pokemon = [];

  async function test(){
    await fetchData()
  }

  async function fetchData(){
    const path = `${API}/1`
    const responses = await Promise.all(IDs.map(id => fetch(`${API}/${id}`)));
    const json = await Promise.all(responses.map(data => data.json()))

    pokemon = json.map(data => ({
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      types: data.types.map((type: object) => type.type.name)
    }))
    console.log(pokemon)
    
    // const json = await response.json()
    // console.log(json)
  }
</script>

