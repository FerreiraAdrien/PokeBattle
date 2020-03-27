import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withTranslation } from 'react-i18next'
import { Offline, Online } from 'react-detect-offline'
import axios from 'axios'

import allTheAction from '../../redux/actions'
import Wrapper from '../wrapper'

const List = ({ pokemons, actions, t }) => {
  useEffect(() => {
    actions.allPokemon.getPokemons()

    axios
      .post('http://51.158.70.36:8080/api/login', {
        username: 'admin',
        password: 'adminpasswordbitch'
      })
      .then(function(response) {
        const token = response.data.token
        localStorage.setItem('x-access-token', token)
      })
      .catch(function(error) {
        console.log(error)
      })
  }, [])

  const localStoragePokemonList = JSON.parse(
    localStorage.getItem('pokemonList')
  )

  return (
    <div>
      <Wrapper>
        <Online>
          <TitlePage>{t('pokedex')}</TitlePage>
          {pokemons.pokemons
            ? pokemons.pokemons.map(pokemon => (
                <CardStyled key={pokemon.id}>
                  <ImgCard src={pokemon.sprites.front_default}></ImgCard>
                  <CardInfos>
                    <PokemonName>{pokemon.name}</PokemonName>
                    <PokemonType>{pokemon.types[0].type.name}</PokemonType>
                    {pokemon.types[1] ? (
                      <PokemonType>{pokemon.types[1].type.name}</PokemonType>
                    ) : null}
                  </CardInfos>
                </CardStyled>
              ))
            : 'no pokemons yet'}
        </Online>
        <Offline>
          <TitlePage>{t('pokedex')}</TitlePage>
          {localStoragePokemonList
            ? localStoragePokemonList.map(pokemon => (
                <CardStyled key={pokemon.id}>
                  <ImgCard src={pokemon.sprites.front_default}></ImgCard>
                  <CardInfos>
                    <PokemonName>{pokemon.name}</PokemonName>
                    <PokemonType>{pokemon.types[0].type.name}</PokemonType>
                    {pokemon.types[1] ? (
                      <PokemonType>{pokemon.types[1].type.name}</PokemonType>
                    ) : null}
                  </CardInfos>
                </CardStyled>
              ))
            : 'aucun pokemon sauvegardé'}
        </Offline>
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

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      allPokemon: bindActionCreators(allTheAction.allPokemon, dispatch)
    }
  }
}

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(List)
)
