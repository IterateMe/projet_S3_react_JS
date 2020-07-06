import React from 'react';
import SignUp from '../../Components/SignUp/SignUp.js';
import {goToSignIn} from '../../Components/NavItems.js';
import TutoApp from '../../util/TutoApp';

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
      this.props.cipLogin(this.state.username);
      console.log(this.state.username);
      console.log(this.state.password);
      console.log(this.state.confirmedPassword);
      let dataToSend = {
        cip: this.state.username,
        email: this.state.username + "@usherbrooke.ca",
        password: this.state.password
      }
      let response = TutoApp.send(dataToSend, "/tutoratApp/api/users");
      console.log(response)
    } else {
      console.log('Invalid Credentials.');
    }  
  }

  handleBackButton(){
    this.props.onNextPage('sign-in');
    //goToSignIn();
  }

  render(){
    return(
      <div className="SignUpPage">
        <SignUp onUsernameChange={this.handleUsernameChange} 
                onPasswordChange={this.handlePasswordChange} 
                onConfirmPasswordChange={this.handleConfirmedPasswordChange} 
                onSignUp={this.handleSignUp}
                onBack={this.handleBackButton}/>
      </div>
    );
  }
}

export default SignUpPage;