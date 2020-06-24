import React from 'react';
import './SignUp.css';


class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmedPasswordChange = this.handleConfirmedPasswordChange.bind(this);
    }
    
    handleUsernameChange(event){
        this.props.onUsernameChange(event.target.value);
    }

    handlePasswordChange(event){
        this.props.onPasswordChange(event.target.value);
    }

    handleConfirmedPasswordChange(event){
        this.props.onConfirmPasswordChange(event.target.value);
    }
    
    render(){
        return (
            <div className="signUpBox">
                <h2>Sign up Information</h2>
                <div className="information">
                    <form>
                        <label>Username:</label><br/>
                        <input onChange={this.handleUsernameChange}/><br/>
                        <label>Password:</label><br/>
                        <input type="password" onChange={this.handlePasswordChange}/><br/>
                        <label>Confirm password:</label><br/>
                        <input type="password" onChange={this.handleConfirmedPasswordChange}/><br/>
                        <button type="button" className="signUpButton" onClick={this.props.onSignUp}>Sign Up</button>
                    </form>   
                </div>
            </div>
        );  
    };
}

export default SignUp;