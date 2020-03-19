import { SET_POKEMONS } from '../../actionTypes/allPokemon'

const initialState = {
  pokemons: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      state.pokemons = action.payload
      return state
    default:
      return state
  }
}
