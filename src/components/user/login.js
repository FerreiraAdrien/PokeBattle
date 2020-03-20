import React, { useState, useEffect } from 'react'
import Wrapper from '../wrapper'
import FormLoginRegister from '../form/form-login-register'

const axios = require('axios')

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const LoginRegisterCall = () => {
    console.log('Login call')
    console.log(username)
    console.log(password)

    axios
      .post('http://51.158.70.36:8080/api/dresseur/login', {
        username: username,
        password: password
      })
      .then(function(response) {
        console.log(response)
        if (response.data.status === 200) {
          let username = response.data.data.username
          localStorage.setItem('username', username)
          props.history.push('/team')
          console.log('ok')
        } else {
          setErrorMessage(response.data.message)
          document.getElementById('errorMessage').innerHTML = errorMessage
          console.log('erreur dans les identifiants')
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  return (
    <Wrapper>
      <FormLoginRegister
        title={'login'}
        nameButton={'Connexion'}
        LoginRegisterCall={LoginRegisterCall}
        setUsername={setUsername}
        setPassword={setPassword}
        errorMessage={errorMessage}
      ></FormLoginRegister>
    </Wrapper>
  )
}

export default Login
