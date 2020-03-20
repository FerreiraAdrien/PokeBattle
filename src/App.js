import React, { useEffect, useState } from 'react'
import './App.css'

import Routes from './config/routes/routes'

import { Provider } from 'react-redux'
import store from './redux/store'
import './config/i18n/translations'
import { ThemeProvider } from 'styled-components'
import { themeLight } from './config/theme'

function App() {
  const [currentTheme, setCurrentTheme] = useState(themeLight)
  useEffect(() => {
    store.subscribe(() => {
      setCurrentTheme(store.getState().theme.currentTheme)
    })
  })
  return (
    <Provider store={store}>
      <ThemeProvider theme={currentTheme}>
        <Routes></Routes>
      </ThemeProvider>
    </Provider>
  )
}

export default App
