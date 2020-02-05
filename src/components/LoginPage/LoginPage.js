import React , { Component } from 'react'
import {connect} from 'react-redux'
// import {loginUser} from '../../actions/user'
// import API from '../../api';
import "./LoginPage.scss"

class LoginPage extends Component{
    constructor(props){
        super(props);

        this.state={
            username: "",
            password: "",
            remember_me: true
        }
    }

    onUsernameChange = (e)=>{
        const username = e.target.value
        this.setState(()=>({ username }))
    }

    onPasswordChange = (e)=>{
        const password = e.target.value
        this.setState(()=>({ password }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
        console.log(JSON.stringify(this.state));
        fetch('http://localhost:5000/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then( response => response.json())
        .then(response => {
            console.log(response)
            //Dispatch Login 
            // this.props.dispatch({type: "LOGIN USER"})
        })
    }

    render(){
        return (
            <div className="LoginMainBody">
                <div className="LoginContainer">
                    <div className="LoginFormContainer">
                        <header>
                            <h1>Account Login</h1>
                        </header>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label      
                                    className="usernameLabel"
                                    htmlFor="username"
                                >
                                    USERNAME
                                </label>
                                <div className="inputDiv">
                                    <input 
                                        type="text"
                                        id="username"
                                        placeholder=""
                                        value={this.state.username}
                                        onChange={this.onUsernameChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label 
                                    className="pwdLabel"
                                    htmlFor="password"
                                >
                                    PASSWORD
                                </label>
                                <div className="inputDiv">
                                    <input 
                                        type="password"
                                        id="password"
                                        placeholder=""
                                        value={this.state.password}
                                        onChange={this.onPasswordChange}
                                    />
                                </div>
                            </div>
                            <div className="LoginFooter">
                                <div className="remember-me">
                                    <input 
                                        type="checkbox"
                                        id="remember_me"
                                    />
                                    <label 
                                        htmlFor="remember_me"
                                    >
                                        Remember Me
                                    </label>
                                </div>

                                <div>Forgot Password?</div>   
                            </div>

                            <button className="LoginButton">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    };
  };
  
export default connect(mapStateToProps)(LoginPage);
  