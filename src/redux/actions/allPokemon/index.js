import axios from 'axios'

export const SET_POKEMONS = 'SET_POKEMONS'

export const setPokemons = pokemons => ({
  type: SET_POKEMONS,
  pokemons
})

export const getPokemons = () => dispatch => {
  let pokemonList = new Array()

  Array.prototype.sortOn = function(key) {
    this.sort(function(a, b) {
      if (a[key] < b[key]) {
        return -1
      } else if (a[key] > b[key]) {
        return 1
      }
      return 0
    })
  }

  axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151').then(res => {
    res.data.results.map(data => {
      axios
        .get(data.url)
        .then(res => {
          pokemonList.push(res.data)
        })
        .then(() => {
          pokemonList.sortOn('id')
          dispatch(setPokemons(pokemonList))
        })
    })
  })
}
