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
        <Route exact path='/team' component={Team}></Route>
        <Route exact path='/history' component={History}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
