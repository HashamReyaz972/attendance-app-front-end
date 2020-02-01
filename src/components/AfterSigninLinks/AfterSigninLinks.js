import React from 'react'
import { NavLink } from 'react-router-dom';

import './_afterSigninLinks.scss'

const AfterSigninLinks = () => (
      <div className="BeforeSigninLinks__wrapper">
        <NavLink className=" a third after"  to="/home">Home</NavLink>
        <NavLink className="a third after" to="/attendance">Attendance</NavLink>
        <NavLink className="a third after" to="/help">Help</NavLink>
      </div>
);
export default AfterSigninLinks;
