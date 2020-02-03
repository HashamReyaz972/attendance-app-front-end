import React , { Component } from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/user'
import API from '../../api';
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
        API.post(`signin`)
            .then(res => {
                this.props.dispatch(loginUser(res.data));
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
                                    for="username"
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
                                    for="password"
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
                                        for="remember_me"
                                    >
                                        Remember Me
                                    </label>
                                </div>

                                <div>Forgot Password?</div>   
                            </div>

                            <div className="LoginButton">
                            <button type="submit" value="Submit">Submit</button>
                            </div>
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
  