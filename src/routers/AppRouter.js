import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import Dashboard from '../components/Dashboard'
import Signup from '../components/Signup'
const AppRouter = () => (
  <BrowserRouter>
    <div>-
      <Header />
      <Switch>
      <Route path="/" component={Dashboard} exact={true} />
      <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;