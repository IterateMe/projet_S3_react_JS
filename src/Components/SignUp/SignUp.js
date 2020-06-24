import React from 'react';
import './SignUp.css';


class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            role: '',
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmedPasswordChange = this.handleConfirmedPasswordChange.bind(this);
        this.handleRoleMentorClick = this.handleRoleMentorClick.bind(this);
        this.handleRoleStudentClick = this.handleRoleStudentClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    handleConfirmedPasswordChange(event){
        this.setState({confirmPassword: event.target.value});
    }

    handleRoleMentorClick(){
        this.setState({role: 'Mentor'});
    }

    handleRoleStudentClick(){
        this.setState({role: 'Student'});
    }
    
    handleSubmit(){
        /*requete post vient ici*/
        /*then tell app to render the new page */
        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.confirmPassword);
        console.log(this.state.role);
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
                        <label>Mentor:</label>
                        <input type="radio" name="role" onClick={this.handleRoleMentorClick}/>
                        <label htmlFor="roleStudent">Student:</label>
                        <input type="radio" name="role" onClick={this.handleRoleStudentClick}/><br/>
                        <button type="button" className="signUpButton" onClick={this.props.onSearch}>Get Courses</button>
                        <button type="button" className="signUpButton" onClick={this.handleSubmit}>Sign Up</button>
                    </form>   
                </div>
            </div>
        );  
    };
}

export default SignUp;