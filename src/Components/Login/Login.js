import React from 'react';
import './Login.css';


class Login extends React.Component{
    constructor(props){
        super(props);

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
        this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
    }
    
    handleUsernameChange(event){
        this.props.onUsernameChange(event.target.value);
    }

    handlePasswordChange(event){
        this.props.onPasswordChange(event.target.value);
    }
    
    handleSubmitSignIn(){
        this.props.onSignIn();
    }

    handleSubmitSignUp(){
        this.props.onSignUp();
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