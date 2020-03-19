import React from 'react'
import Wrapper from '../wrapper'
import FormLoginRegister from '../form/form-login-register'

const Login = () => {
  return (
    <Wrapper>
      <FormLoginRegister
        title={'Login'}
        nameButton={'Connexion'}
      ></FormLoginRegister>
    </Wrapper>
  )
}

export default Login
