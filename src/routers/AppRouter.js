import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Authenticate from './Authenticate';


import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import LoginPage from '../components/LoginPage';
import SignUpPage from '../components/SignUpPage';

import Help from '../components/Help'

const AuthHelp = Authenticate(Help)

const AppRouter = () => (
  <BrowserRouter>
    <div >
      <Sidebar />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/help" render={ (routeProps)=>(<AuthHelp requiredRole="teacher" {...routeProps} />) } />

      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;