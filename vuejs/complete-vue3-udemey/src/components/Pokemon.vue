<template>
  <div class="cards">
    <Card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      @click="fetchEvolutions(pokemon)"
    >
      <template v-slot:title> {{ pokemon.name }} #{{ pokemon.id }} </template>
      <template v-slot:content>
        <img :src="pokemon.sprite" />
      </template>
      <template v-slot:description>
        <div v-for="type in pokemon.types" :key="type">
          {{ type }}
        </div>
      </template>
    </Card>
  </div>

  <div class="cards">
    <Card v-for="pokemon in evolutions" :key="pokemon.id">
      <template v-slot:title>
        {{ pokemon.name }}
      </template>
      <template v-slot:content>
        <img :src="pokemon.sprite" />
      </template>
      <template v-slot:description>
        <div v-for="type in pokemon.types" :key="type">
          {{ type }}
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Card from './Card.vue';

const api = 'https://pokeapi.co/api/v2/pokemon';
const IDS = [1, 4, 7];

interface IPokemon {
  id: number;
  name: string;
  sprite: string;
  types: string[];
}

@Options({
  components: {
    Card,
  },
})
export default class Pokemon extends Vue {
  pokemons: IPokemon[] = [];
  evolutions: IPokemon[] = [];

  async created() {
    // created in memory
    console.log('created');
    this.pokemons = await this.fetchData(IDS);
  }

  mounted() {
    // inserted into the dom
    console.log('mounted');
  }

  async fetchEvolutions(pokemon: IPokemon) {
    this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2]);
  }

  async fetchData(ids: number[]): Promise<IPokemon[]> {
    const responses = await Promise.all(ids.map(id => fetch(`${api}/${id}`)));
    const json = await Promise.all(responses.map(data => data.json()));

    return json.map(
      data =>
        ({
          id: data.id,
          name: data.name,
          sprite: data.sprites.other['official-artwork'].front_default,
          types: data.types.map((type: any) => type.type.name),
        } as IPokemon)
    );
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
.cards {
  display: flex;
}
</style>
