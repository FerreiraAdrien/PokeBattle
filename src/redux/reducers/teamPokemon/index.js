import { ADD_POKEMON, DELETE_POKEMON } from '../../actions/teamPokemon'

let index = 0
const initialState = {
  team: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POKEMON:
      state.team.push(action.payload)
      return state
    case DELETE_POKEMON:
      index = state.team.indexOf(action.payload)
      if (index > -1) {
        state.team.splice(index, 1)
      }
      return state
    default:
      return state
  }
}
