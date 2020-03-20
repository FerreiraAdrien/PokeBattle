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
          data = res.data
          console.log(data)
          delete data.abilities
          delete data.base_experience
          delete data.forms
          delete data.game_indices
          delete data.held_items
          delete data.moves
          delete data.species
          delete data.stats
          pokemonList.push(data)
        })
        .then(() => {
          pokemonList.sortOn('id')
          // renvoie à la vue
          dispatch(setPokemons(pokemonList))
          // enregistrement dans le localstorage
          if (
            localStorage.getItem('pokemonList') == null ||
            JSON.parse(localStorage.getItem('pokemonList')).length < 150
          ) {
            localStorage.setItem('pokemonList', JSON.stringify(pokemonList))
          }
        })
    })
  })
}
