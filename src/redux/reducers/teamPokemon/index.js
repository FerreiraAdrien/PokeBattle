import { SET_TEAM } from '../../actions/teamPokemon'

const initialState = {
  team: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TEAM:
      return {
        ...state,
        team: action.team
      }
    default:
      return state
  }
}
