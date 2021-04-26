<template>
 <pokemon-cards 
  :pokemons="pokemons"
  @chosen="fetchEvolutions"
  :selectedId="selectedId"
 />
 <pokemon-cards 
  :pokemons="evolutions"
 />
</template>

<script>
import PokemonCards from './PokemonCards.vue'

const api = 'https://pokeapi.co/api/v2/pokemon'
const IDS = [1, 4, 7]

export default {
  components: {
    PokemonCards
  },
  data(){
    return {
      pokemons: [],
      evolutions: [],
      selectedId: null
    }
  },

  // lifecycle hooks

  // created in memory
  async created(){
    this.pokemons = await this.fetchData(IDS)
  },

  // mounted to the dom
  // mounted(){
  //   // this.$el dom element created
  //   console.log('mounted', this.$el)
  // },

  methods: {
    async fetchEvolutions(pokemon){
      this.evolutions = await this.fetchData(
        [pokemon.id+1, pokemon.id+2]
      )
      this.selectedId = pokemon.id
    },
    async fetchData(ids){
      const response = await Promise.all(
        ids.map(id => fetch(`${api}/${id}`))
      )
      const json = await Promise.all(
        response.map(data => data.json())
      )
      
      return json.map(data => ({
        id: data.id,
        name: data.name,
        sprite: data.sprites.other['official-artwork'].front_default,
        types: data.types.map(type => type.type.name)
      }))
    }
  }
}
</script>

<style scoped>

</style>