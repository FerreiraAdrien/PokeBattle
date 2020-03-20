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
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('username') ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={List}></Route>
        <PrivateRoute exact path='/team' component={Team}></PrivateRoute>
        <PrivateRoute exact path='/history' component={History}></PrivateRoute>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
