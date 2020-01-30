import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import Dashboard from '../components/Dashboard'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
      <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;