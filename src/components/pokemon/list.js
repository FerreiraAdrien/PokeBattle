import React, { Component } from 'react'
// import axios from 'axios'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setPokemons } from '../../redux/actions/allPokemon'
import i18n from 'i18next'
import { withTranslation } from 'react-i18next'

import Wrapper from '../wrapper'

const List = ({ pokemons, setPokemons, t }) => {
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
        <TitlePage>{t('pokedex')}</TitlePage>
        <CardStyled>
          <ImgCard
            src={
              'https://www.pokepedia.fr/images/thumb/8/8d/Ectoplasma-RFVF.png/375px-Ectoplasma-RFVF.png'
            }
          ></ImgCard>
          <CardInfos>
            <PokemonName>Ectoplasma</PokemonName>
            <PokemonType>Spectre</PokemonType>
            <PokemonType>Poison</PokemonType>
          </CardInfos>
        </CardStyled>
      </Wrapper>
    </div>
  )
}

const TitlePage = styled.h2`
  text-align: center;
  text-transform: uppercase;
`
const CardStyled = styled.div`
  width: 90%;
  padding: 5%;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 3px 3px 10px 5px grey;
  background-color: white;
  display: flex;
  margin: 3% 0;
`

const ImgCard = styled.img`
  height: 25%;
  width: 25%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-right: 5%;
`

const CardInfos = styled.div`
  width: 75%;
`

const PokemonName = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.3rem;
  margin-bottom: 10%;
`

const PokemonType = styled.span`
  font-size: 90%;
  margin: 5% 2%;
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

export default withTranslation()(
  connect(mapStateToProps, { setPokemons })(List)
)
