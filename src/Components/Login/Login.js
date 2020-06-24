import React from 'react';
import './Login.css';
import {goToSignUp} from '../NavItems.js';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
        this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
    }
    
    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }
    
    handleSubmitSignIn(){
        console.log(this.state.username);
        console.log(this.state.password);
    }

    handleSubmitSignUp(){
        goToSignUp();
    }

    render(){
        return (
            <div className="loginBox">
                <h2>Login Information</h2>
                <div className="information">
                    <form className="information-form">
                        <label>Username:</label><br/>
                        <input onChange={this.handleUsernameChange}/><br/>
                        <label>Password:</label><br/>
                        <input type="password" onChange={this.handlePasswordChange}/><br/>
                        <button type="button" className="loginButton" onClick={this.handleSubmitSignIn}>Log In</button>
                        <button type="button" className="loginButton" onClick={this.handleSubmitSignUp}>Sign Up</button>
                    </form>                   
                </div>
            </div>
        );  
    };
}

export default Login;