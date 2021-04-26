<template>
  <div class="cards">
    <Card 
      v-for="pokemon in pokemons" 
      :key="pokemon.id"
      @click="click(pokemon)"
      :class="{ opace: selectedId && pokemon.id !== selectedId }"
      class="card"
    >
      <template v-slot:title>
        {{ pokemon.name }}
      </template>

      <template v-slot:content>
        <img :src="pokemon.sprite" />
      </template>

      <template v-slot:description>
        <div v-for="t in pokemon.types" :key="t">
          {{ t }}
        </div>
      </template>

    </card>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card
  },
  props: {
    selectedId: {
      type: String,
    },
    pokemons: {
      type: Array,
      default: []
    }
  },
  methods: {
    click(pokemon){
      this.$emit('chosen', pokemon)
    }
  }

}
</script>

<style scoped>
.card:hover {
  opacity: 1.0
}
.opace {
  opacity: 0.5
}
img {
  width: 100%
}
.cards {
  display: flex;
}
</style>