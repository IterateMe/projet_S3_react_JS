import React from 'react';
import './MainMenu.css';
import SidebarLayout from "../../Components/SidebarLayout/SidebarLayout";
import Calendar from '../../Components/Calendar/Calendar.js';
import '../../Components/MatchList/MatchList'
import MatchList from "../../Components/MatchList/MatchList";

class MainMenu extends React.Component{
    constructor(props){
        super(props)

        this.handleMentorSignUp = this.handleMentorSignUp.bind(this);
        this.handleStudentSignUp = this.handleStudentSignUp.bind(this);
    }

    handleMentorSignUp(){
        this.props.onNextPage('mentor-signup');
        //goToMentorSignUp()
    }

    handleStudentSignUp(){
        this.props.onNextPage('student-signup');
        //goToStudentSignUp()
    }

    /* More components can be added so functions will be added here*/

    render(){
        return (


            <div className="Main-Menu">

                <MatchList cip={this.props.cip}/>
                <Calendar id="bob"/>
                <div className="buttons">
                    <button className="Menu-Button"onClick={this.handleMentorSignUp}>Mentor Sign Up</button><br/>
                    <button className="Menu-Button"onClick={this.handleStudentSignUp}>Student Sign Up</button><br/>
                </div>
            </div>



        )
    }
}

export default MainMenu;