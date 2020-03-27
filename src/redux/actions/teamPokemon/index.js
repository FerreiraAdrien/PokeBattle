import axios from 'axios'

export const SET_TEAM = 'SET_TEAM'

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

export const setTeam = team => ({
  type: SET_TEAM,
  team
})
