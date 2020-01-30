import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <div>
    <h1>Attendance App</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink>
  </div>
);
export default Sidebar;