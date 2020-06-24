import React from 'react';
import SignUp from '../../Components/SignUp/SignUp.js';

import './SignUpPage.css';

class SignUpPage extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      username:'',
      password: '',
      confirmedPassword: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmedPasswordChange = this.handleConfirmedPasswordChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleUsernameChange(newUsername){
    this.setState({username: newUsername});
  }

  handlePasswordChange(newPassword){
    this.setState({password: newPassword});
  }

  handleConfirmedPasswordChange(newConfrimPassword){
    this.setState({confirmedPassword: newConfrimPassword});
  }

  handleSignUp(){
    if (this.state.password === this.state.confirmedPassword){
      console.log(this.state.username);
      console.log(this.state.password);
      console.log(this.state.confirmedPassword);
    } else {
      console.log('Invalid Credentials.');
    }
    
  }

  render(){
    return(
      <div className="SignUpPage">
        <SignUp onUsernameChange={this.handleUsernameChange} 
                onPasswordChange={this.handlePasswordChange} 
                onConfirmPasswordChange={this.handleConfirmedPasswordChange} 
                onSignUp={this.handleSignUp}/>
      </div>
    );
  }
}

export default SignUpPage;