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
        <PasswordInput placeholder='Password'></PasswordInput>
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
  width: 30%;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  font-size: 15px;
`

const PasswordInput = styled.input`
  width: 30%;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  font-size: 15px;
`

const ButtonWrapper = styled.div``

const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
`

export default FormLoginRegister
