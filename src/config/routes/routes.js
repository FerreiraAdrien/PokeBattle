import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

import List from '../../components/pokemon/list'
import Login from '../../components/user/login'
import Register from '../../components/user/register'
import Team from '../../components/user/team'
import History from '../../components/user/history'

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
