import React from 'react'
import { NavLink } from 'react-router-dom';

import './_beforeSigninLinks.scss'

const BeforeSigninLinks = () => (
      <div className="BeforeSigninLinks__wrapper">
        <NavLink className=" a third after"  to="/login">Login</NavLink>
        <NavLink className="a third after" to="/signup">Signup</NavLink>
        <NavLink className="a third after" to="/help">Help</NavLink>
      </div>
);
export default BeforeSigninLinks;
