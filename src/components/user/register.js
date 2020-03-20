import React, { useState, useEffect } from 'react'

import Wrapper from '../wrapper'
import FormLoginRegister from '../form/form-login-register'

const axios = require('axios')

const Register = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const LoginRegisterCall = () => {
    console.log('Register call')
    console.log(username)
    console.log(password)

    let token = localStorage.getItem('x-access-token')

    let axiosConfig = {
      headers: {
        'x-access-token': token
      }
    }

    axios
      .post(
        'http://51.158.70.36:8080/api/dresseurs/',
        {
          username: username,
          password: password
        },
        axiosConfig
      )
      .then(function(response) {
        console.log(response)

        if (response.data.status === 200) {
          props.history.push('/login')
          console.log('ok')
        } else {
          setErrorMessage(response.data.message._message)
          document.getElementById('errorMessage').innerHTML = errorMessage
          console.log('erreur lors de la création')
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }
  return (
    <Wrapper>
      <FormLoginRegister
        title={'Create an account'}
        nameButton={'Register'}
        LoginRegisterCall={LoginRegisterCall}
        setUsername={setUsername}
        setPassword={setPassword}
        errorMessage={errorMessage}
      ></FormLoginRegister>
    </Wrapper>
  )
}

export default Register
