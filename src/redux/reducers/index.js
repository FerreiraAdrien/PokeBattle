import { combineReducers } from 'redux'
import pokemons from './allPokemon'
import teams from './teamPokemon'

export default combineReducers({ pokemons, teams })
