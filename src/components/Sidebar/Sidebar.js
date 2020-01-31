import React from 'react'
import { NavLink } from 'react-router-dom';
import './_sidebar.scss'

const Sidebar = () => (

    <div className="sidepane">
      <div className="sidepane__logo">
        <h1>Attendance App</h1>
      </div>
      <div className="sidepane__inner">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/help">Help</NavLink>
      </div>
    </div>
);
export default Sidebar;