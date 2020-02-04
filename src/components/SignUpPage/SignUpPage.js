import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import "./SignUpPage.scss"

class SignUpPage extends Component{
    constructor(props){
        super(props);

        this.state={
            username: "",
            role: "student",
            password: "",
            confirm_password: "",
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

    onConfirmPasswordChange = (e)=>{
        const confirm_password = e.target.value
        this.setState(()=>({ confirm_password }))
    }

    onRoleChange = (e)=>{
        const role = e.target.value;
        this.setState(()=> ({ role }))
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        const user_data = this.state
        delete user_data.confirm_password

        console.log(user_data);

        fetch('http://localhost:5000/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user_data)
        })
        .then(response => response.json())
        .then((data) =>{
            if(data['status'] === 200){
                console.log(data);
                this.props.history.push('/login')
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render(){
        return (
            <div className="SignUpMainBody">
                <div className="SignUpContainer">
                    <div className="SignUpFormContainer">
                        <header>
                            <h1>Account SignUp</h1>
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
                                <label className="roleLabel">ROLE</label>
                                <div className="selectDiv">
                                    <select 
                                        name="role"
                                        value={this.state.role}
                                        onChange={this.onRoleChange}
                                    >
                                        <option value="student">Student</option>
                                        <option value="teacher">Teacher</option>
                                    </select>
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
                            <div>
                                <label 
                                    className="pwdLabel"
                                    htmlFor="confirm-password"
                                >
                                    CONFIRM PASSWORD
                                </label>
                                <div className="inputDiv">
                                    <input 
                                        type="password"
                                        id="confirm-password"
                                        placeholder=""
                                        value={this.state.confirm_password}
                                        onChange={this.onConfirmPasswordChange}
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
                                        htmlFor="remember_me"
                                    >
                                        Remember Me
                                    </label>
                                </div>

                                <div>Account Already Exist?</div>   
                            </div>

                            <button className="SignUpButton">
                                SignUp
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpPage;