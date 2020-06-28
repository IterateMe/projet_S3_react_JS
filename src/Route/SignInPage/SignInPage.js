import React from 'react';
import Login from'../../Components/Login/Login.js';
import {goToSignUp} from '../../Components/NavItems.js';
import {goToMainMenu} from '../../Components/NavItems.js';
import TutoApp from '../../util/TutoApp.js';

class SignInPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleUsernameChange(newUsername){
        this.setState({username: newUsername});
    }

    handlePasswordChange(newPassword){
        this.setState({password: newPassword});
    }

    handleSignIn(){
        TutoApp.validateSignIn(this.state.username)
            .then((response) => {
                console.log(response);
                if(response){
                    this.props.cipLogin(this.state.username);
                } else {
                    alert('Please Sign up!');
                }
            });
        //goToMainMenu()
        //console.log(this.state.username);
        //console.log(this.state.password);
    }

    handleSignUp(){
        this.props.onNextPage('sign-up')
        //goToSignUp();
    }


    render(){
        return <Login onUsernameChange={this.handleUsernameChange} 
                onPasswordChange={this.handlePasswordChange} 
                onSignIn={this.handleSignIn} 
                onSignUp={this.handleSignUp}/>
    }
}

export default SignInPage;