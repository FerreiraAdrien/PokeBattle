export const ADD_POKEMON = 'ADD_POKEMON'
export const DELETE_POKEMON = 'DELETE_POKEMON'

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
