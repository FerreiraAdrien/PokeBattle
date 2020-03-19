import React from 'react'
import './App.css'

import Routes from './config/routes/routes'

import {Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  )
}

export default App
