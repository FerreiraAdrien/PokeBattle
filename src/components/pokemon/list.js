import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Wrapper from '../wrapper'

const List = () => {
  let pokemonList = []

  const promise = new Promise(function(resolve, reject) {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150').then(res => {
      resolve(res.data.results)
    })
  })

  promise.then(function(value) {
    value.map(pokemon => {
      axios.get(pokemon.url).then(res => {
        pokemonList.push(res.data)
      })
    })
  })

  console.log(pokemonList)

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

export default List
