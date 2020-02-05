import React from 'react'
import {connect } from 'react-redux'
import './_sidebar.scss'

import BeforeSigninLinks from '../BeforeSigninLinks'
import AfterSigninLinks from '../AfterSigninLinks'

 const ChildrenControlLinks = [BeforeSigninLinks, AfterSigninLinks]

// const loggedin = false;

const SidebarHOC = ([ChildOne, ChildTwo]) => {
  return (props) => (

    <div className="sidepane">
         <div className="sidepane__logo">
           <h1>Attendance App</h1>
        </div>
                
    <div>
      {!props.user.jwt ? (
        <ChildOne />
      ) : (
          <ChildTwo />
        )}
    </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    user: state.user 
  };
};

const Sidebar = connect(mapStateToProps)(SidebarHOC(ChildrenControlLinks));
export default Sidebar