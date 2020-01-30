import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Signup from '../components/Signup'
const AppRouter = () => (
  <BrowserRouter>
    <div>-
      <Dashboard />
      <Switch>

      <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;