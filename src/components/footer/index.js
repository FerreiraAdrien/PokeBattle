import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <section>
      <FooterStyled>Footer</FooterStyled>
    </section>
  )
}

const FooterStyled = styled.div`
  background-color: grey;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Footer
