import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import "./SignUpPage.scss"

class SignUpPage extends Component{
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

    render(){
        return (
            <div className="SignUpMainBody">
                <div className="SignUpContainer">
                    <div className="SignUpFormContainer">
                        <header>
                            <h1>Account SignUp</h1>
                        </header>
                        <form>
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
                            <div>
                                <label 
                                    className="pwdLabel"
                                    for="confirm-password"
                                >
                                    CONFIRM PASSWORD
                                </label>
                                <div className="inputDiv">
                                    <input 
                                        type="password"
                                        id="confirm-password"
                                        placeholder=""
                                        value={this.state.confirm_password}
                                        onChange={this.onPasswordChange}
                                    />
                                </div>
                            </div>
                            <div className="SignUpFooter">
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

                                <div>Account Already Exist?</div>   
                            </div>

                            <div className="SignUpButton">
                                SignUp
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpPage;