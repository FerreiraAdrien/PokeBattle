import React from 'react'

import Wrapper from '../wrapper'
import FormLoginRegister from '../form/form-login-register'

const Register = () => {
  return (
    <Wrapper>
      <FormLoginRegister
        title={'Create an account'}
        nameButton={'Register'}
      ></FormLoginRegister>
    </Wrapper>
  )
}

export default Register
