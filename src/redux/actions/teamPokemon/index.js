import { ADD_POKEMON, DELETE_POKEMON } from '../../actionTypes/teamPokemon'

export const AddPokemons = pokemon => ({
  type: ADD_POKEMON,
  payload: {
    pokemon
  }
})

export const DeletePokemons = pokemon => ({
  type: DELETE_POKEMON,
  payload: {
    pokemon
  }
})
