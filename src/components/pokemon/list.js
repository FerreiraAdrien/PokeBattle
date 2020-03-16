import React from 'react'
import styled from 'styled-components'

import Wrapper from '../wrapper'

const List = () => {
  return (
    <div>
      <Wrapper>
        List of pokemon :
        <br />
        <br />
        <br />
        <br />
        <CardStyled>information sur pokemon</CardStyled>
        <br />
        <br />
        <br />
      </Wrapper>
    </div>
  )
}

const CardStyled = styled.div`
  background-color: burlywood;
  width: 90%;
  padding: 2%;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
`

export default List
