import React, { Component } from 'react'
// import axios from 'axios'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setPokemons } from '../../redux/actions/allPokemon'

import Wrapper from '../wrapper'

const List = ({ pokemons, setPokemons }) => {
  // let pokemonList = []
  // const promise = new Promise(function(resolve, reject) {
  //   axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150').then(res => {
  //     resolve(res.data.results)
  //   })
  // })
  // promise.then(function(value) {
  //   value.map(pokemon => {
  //     axios.get(pokemon.url).then(res => {
  //       pokemonList.push(res.data)
  //     })
  //   })
  // })
  // console.log(pokemonList)

  const listeBidon = ['1', '2']
  console.log(pokemons)

  setPokemons(listeBidon)
  console.log(pokemons)

  return (
    <div>
      <Wrapper>
        List of pokemon :
        <br />
        <br />
        <br />
        <br />
        <CardStyled>
          <CardHeaderStyled>
            <ImageStyled
              src={
                'https://www.pokepedia.fr/images/thumb/8/8d/Ectoplasma-RFVF.png/375px-Ectoplasma-RFVF.png'
              }
            ></ImageStyled>
          </CardHeaderStyled>
          <CardContentStyled>
            <PokemonNameStyled>Ectoplasma</PokemonNameStyled>
            <PokemonTypeStyled>Spectre</PokemonTypeStyled>
            <PokemonTypeStyled>Poison</PokemonTypeStyled>
          </CardContentStyled>
        </CardStyled>
        <br />
        <br />
        <br />
      </Wrapper>
    </div>
  )
}

const CardStyled = styled.div`
  width: 90%;
  padding: 2%;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 3px 3px 10px 5px grey;
  background-color: white;
`

const CardHeaderStyled = styled.div`
  text-align: center;
`

const CardContentStyled = styled.div`
  text-align: center;
`

const ImageStyled = styled.img`
  height: 100px;
  width: auto;
`
const PokemonNameStyled = styled.p`
  font-size: 110%;
`

const PokemonTypeStyled = styled.span`
  font-size: 90%;
  margin: 2%;
  padding: 3px 20px 6px 20px;
  color: white;
  background-color: royalblue;
  border-radius: 20px;
`

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addPokemon: array => {
//       dispatch({ type: 'SET_POKEMONS', array: array })
//     }
//   }
// }

export default connect(mapStateToProps, { setPokemons })(List)
