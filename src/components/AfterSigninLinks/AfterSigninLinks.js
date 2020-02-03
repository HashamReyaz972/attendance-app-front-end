import React from 'react'
import { NavLink } from 'react-router-dom';

import './_afterSigninLinks.scss'

// const AfterSigninLinks = () => (
//       <div className="BeforeSigninLinks__wrapper">
//         <NavLink className=" a third after"  to="/home">Home</NavLink>
//         <NavLink className="a third after" to="/attendance">Attendance</NavLink>
//         <NavLink className="a third after" to="/help">Help</NavLink>
//       </div>
// );
// export default AfterSigninLinks;


const AfterSigninLinks = () => (
  <div className="after-signin-nav">
    <div className="user-profile-div">
        <div className="user-image">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg" alt="User"/>
        </div>
        <p className="username">Hasham Reyaz</p>
    </div>
    <div className="sidepane-nav">
    <ul class='navigation'>
      <li className='navigation-item'><a>Home</a></li>
      <li className='navigation-item'><a>Attendance</a></li>
      <li className='navigation-item'><a>Notifications</a></li>
      <li className='navigation-item'><a>Logout</a></li>
    </ul>
    </div>
  </div>
);
export default AfterSigninLinks;  