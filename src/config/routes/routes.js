import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

import List from '../../components/pokemon/list'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={List}></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
