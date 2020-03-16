import React, {Component} from 'react'
import { connect } from 'react-redux';
// import jwt from 'jwt-decode';

// import { NavLink } from 'react-router-dom';

import './_afterSigninLinks.scss'
import JwtDecode from 'jwt-decode';

// const AfterSigninLinks = () => (
//       <div className="BeforeSigninLinks__wrapper">
//         <NavLink className=" a third after"  to="/home">Home</NavLink>
//         <NavLink className="a third after" to="/attendance">Attendance</NavLink>
//         <NavLink className="a third after" to="/help">Help</NavLink>
//       </div>
// );
// export default AfterSigninLinks;

class AfterSigninLinks extends Component{
  constructor(props){
    super(props);
    this.state = {
      userRole : JwtDecode(this.props.jwt).role
    }
  }
  render(){
    return(
      <div className="after-signin-nav">
        <div className="user-profile-div">
            <a href="/" className="user-image">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg" alt="User"/>
            </a>
            <p className="username">Hasham Reyaz</p>
        </div>
        <div className="sidepane-nav">
          <div className='navigation'>
            { this.state.userRole === 'student' && 
              <React.Fragment>
                <a href="/attendance" className='navigation-item'>Attendance</a>
              </React.Fragment>
            }
            { 
              this.state.userRole === 'teacher' &&
              <React.Fragment>
                <a href="/attendance" className='navigation-item'>Attendance</a>
                <a href="/message" className="navigation-item">Message</a>
              </React.Fragment>
            }
            {
              this.state.userRole === 'admin' && 
              <React.Fragment>
                <a href="/addTeacher" className="navigation-item">Add Teacher</a>
                <a href="/addStudent" className="navigation-item">Add Student</a>
                <a href="/message" className="navigation-item">Message</a>
              </React.Fragment>
            }
            <a href="/" className='navigation-item'>Logout</a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    jwt: state.user.jwt
  }
}

export default connect(mapStateToProps)(AfterSigninLinks);  