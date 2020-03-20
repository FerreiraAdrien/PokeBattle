import { SET_POKEMONS } from '../../actionTypes/allPokemon'

const initialState = {
  pokemons: ['pokemon from reducer']
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      console.log('set activated')
      state.pokemons = action.payload
      return state
    default:
      return state
  }
}
