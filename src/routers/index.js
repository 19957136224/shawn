import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from '../containers/login'
import Register from '../containers/register'


const RouteIndex = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
);


export default RouteIndex;