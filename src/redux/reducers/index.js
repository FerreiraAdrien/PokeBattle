import { combineReducers } from 'redux'
import Pokemons from './allPokemon'
import Teams from './teamPokemon'
export default combineReducers({ Pokemons, Teams })
