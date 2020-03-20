import { SET_POKEMONS } from '../../actions/allPokemon'

const initialState = {
  pokemons: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.pokemons
      }
    default:
      return state
  }
}
