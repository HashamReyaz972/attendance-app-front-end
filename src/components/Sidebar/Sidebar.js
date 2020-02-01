import React from 'react'
import { NavLink } from 'react-router-dom';
import './_sidebar.scss'

import BeforeSigninLinks from '../BeforeSigninLinks'
import AfterSigninLinks from '../AfterSigninLinks'

 const ChildrenControlLinks = [BeforeSigninLinks, AfterSigninLinks]

const loggedin = true;

const SidebarHOC = ([ChildOne, ChildTwo]) => {
  return (props) => (

    <div className="sidepane">
         <div className="sidepane__logo">
           <h1>Attendance App</h1>
        </div>

    <div>
      {!loggedin ? (
        <ChildOne {...props} />
      ) : (
          <ChildTwo {...props} />
        )}
    </div>
    </div>
  );
};
const Sidebar = SidebarHOC(ChildrenControlLinks);



export default Sidebar;