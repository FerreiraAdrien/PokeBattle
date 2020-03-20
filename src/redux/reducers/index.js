import { combineReducers } from 'redux'
import pokemons from './allPokemon'
import teams from './teamPokemon'
import theme from './theme'

export default combineReducers({ pokemons, teams, theme })
