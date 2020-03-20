import { SET_POKEMONS } from '../../actionTypes/allPokemon'

export const setPokemons = pokemons => ({
  type: SET_POKEMONS,
  payload: {
    pokemons
  }
})
