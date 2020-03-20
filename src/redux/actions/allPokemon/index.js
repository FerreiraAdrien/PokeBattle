import axios from 'axios'

export const SET_POKEMONS = 'SET_POKEMONS'

export const setPokemons = pokemons => ({
  type: SET_POKEMONS,
  pokemons
})

export const getPokemons = () => dispatch => {
  let pokemonList = new Array()

  axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150').then(res => {
    res.data.results.map(data => {
      axios
        .get(data.url)
        .then(res => {
          pokemonList.push(res.data)
        })
        .then(() => {
          dispatch(setPokemons(pokemonList))
        })
    })
  })
}
