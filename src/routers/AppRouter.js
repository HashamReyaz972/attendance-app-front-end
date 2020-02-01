import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import LoginPage from '../components/LoginPage';
import SignUpPage from '../components/SignUpPage';
import BeforeSigninLinks from '../components/BeforeSigninLinks'

import Help from '../components/Help'
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={BeforeSigninLinks} exact={true} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/help" component={Help} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;