import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

import Help from '../components/Help'
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Sidebar />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/login" component={LoginPage} />
        <Route path="/help" component={Help} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;