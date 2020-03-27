import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import i18next from 'i18next'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withTranslation } from 'react-i18next'

import allTheAction from '../../redux/actions'
import Wrapper from '../wrapper'

const Team = ({ teams, actions, t }) => {
  return (
    <Wrapper>
      <TitlePage>My Team</TitlePage>
      {teams.team.map(pokemon => (
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
      ))}
    </Wrapper>
  )
}

const TitlePage = styled.h2`
  text-align: center;
  text-transform: uppercase;
`

const EmptyTeam = styled.div`
  width: 90%;
  padding: 5%;
  border-style: dashed solid;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin: 3% 0;
  cursor: pointer;
`

const EmptyTeamText = styled.div`
  text-align: center;
  font-weight: bold;
  align-items: center;
  justify-content: center;
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
    teams: state.teams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      allTeam: bindActionCreators(allTheAction.teamPokemon, dispatch)
    }
  }
}

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(Team)
)
