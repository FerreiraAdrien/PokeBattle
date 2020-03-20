import React from 'react'
import styled from 'styled-components'

const FormLoginRegister = props => {
  return (
    <FormWrapper>
      <TitleWrapper>
        <Title>{props.title}</Title>
      </TitleWrapper>
      <UsernameInputWrapper>
        <UsernameInput
          placeholder='Username'
          onChange={e => props.setUsername(e.target.value)}
          type='text'
        ></UsernameInput>
      </UsernameInputWrapper>
      <PasswordInputWrapper>
        <PasswordInput
          placeholder='Password'
          onChange={e => props.setPassword(e.target.value)}
          type='password'
        ></PasswordInput>
      </PasswordInputWrapper>
      <ButtonWrapper>
        <Button onClick={() => props.LoginRegisterCall()}>
          {props.nameButton}
        </Button>
      </ButtonWrapper>
      <ErrorMessageWrapper>
        <ErrorMessage id='errorMessage'>{props.errorMessage}</ErrorMessage>
      </ErrorMessageWrapper>
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

const ErrorMessageWrapper = styled.div``

const ErrorMessage = styled.p``

export default FormLoginRegister
