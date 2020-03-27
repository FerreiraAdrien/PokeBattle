import axios from 'axios'

export const DELETE_POKEMON = 'DELETE_POKEMON'
export const ADD_POKEMON = 'ADD_POKEMON'

export const AddPokemon = () => dispatch => {
  let username = localStorage.getItem('username')
  let poke = '6'

  axios
    .put('http://51.158.70.36:8080/api/dresseurs/' + username, {
      poke_id: poke
    })
    .then(function(res) {
      console.log(res.team)
    })
    .catch(function(err) {
      console.log(err)
    })
}

export const DeletePokemons = pokemon => ({
  type: DELETE_POKEMON,
  payload: {
    pokemon
  }
})
