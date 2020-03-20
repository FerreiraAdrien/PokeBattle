import axios from 'axios'

export const SET_POKEMONS = 'SET_POKEMONS'

export const setPokemons = pokemons => ({
  type: SET_POKEMONS,
  pokemons
})

export const getPokemons = () => dispatch => {
  axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150').then(res => {
    console.log(res.data.results)
    dispatch(setPokemons(res.data.results))
  })
}
