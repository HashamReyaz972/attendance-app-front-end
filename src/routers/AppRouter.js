import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import Dashboard from '../components/Dashboard'
import LoginPage from '../components/LoginPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exac />
        {/* <Route path="/login" component={LoginPage} /> */}
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;