import { SET_POKEMONS } from '../../actionTypes/allPokemon'

export const SetPokemons = pokemons => ({
  type: SET_POKEMONS,
  payload: {
    pokemons
  }
})
