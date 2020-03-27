import React, { useEffect } from 'react'
import './App.css'
import { messaging } from './config/initFirebaseMessaging'

import Routes from './config/routes/routes'

function App() {
  useEffect(() => {
    messaging
      .requestPermission()
      .then(async function() {
        const token = await messaging.getToken()
        console.log('TCL: App -> token', token)
      })
      .catch(function(err) {
        console.log('Unable to get permission to notify.', err)
      })
    navigator.serviceWorker.addEventListener('message', message =>
      console.log(message)
    )
  })
  return (
    <div className='App'>
      <Routes></Routes>
    </div>
  )
}

export default App
