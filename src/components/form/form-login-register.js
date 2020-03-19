import React from 'react'
import styled from 'styled-components'

const FormLoginRegister = props => {
  return (
    <FormWrapper>
      <TitleWrapper>
        <Title>{props.title}</Title>
      </TitleWrapper>
      <UsernameInputWrapper>
        <UsernameInput placeholder='Username'></UsernameInput>
      </UsernameInputWrapper>
      <PasswordInputWrapper>
        <PasswordInput placeholder='Password' type='password'></PasswordInput>
      </PasswordInputWrapper>
      <ButtonWrapper>
        <Button>{props.nameButton}</Button>
      </ButtonWrapper>
    </FormWrapper>
  )
}
const FormWrapper = styled.div``

const TitleWrapper = styled.div``

const Title = styled.h1``

const UsernameInputWrapper = styled.div`
  margin-bottom: 1%;
`

const PasswordInputWrapper = styled.div`
  margin-bottom: 1%;
`

const UsernameInput = styled.input`
  width: 70%;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  height: 1.5rem;
  font-size: 1.2rem;
`

const PasswordInput = styled.input`
  width: 70%;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  height: 1.5rem;
  font-size: 1.2rem;
`

const ButtonWrapper = styled.div``

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
  margin-top: 2rem;
  width: 70%;
  background-color: #ee5253;
  text-transform: uppercase;
  font-weight: bold;
`

export default FormLoginRegister
