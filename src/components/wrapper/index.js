import React from 'react'
import styled from 'styled-components'

import Header from '../header'
import Footer from '../footer'

const Wrapper = ({ children }) => (
  <div>
    <Header></Header>
    <ContentStyled>{children}</ContentStyled>
    <Footer></Footer>
  </div>
)

const ContentStyled = styled.section`
  padding: 2%;
  text-align: center;
`

export default Wrapper
