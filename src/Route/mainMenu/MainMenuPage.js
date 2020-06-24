import React from 'react';
import './MainMenu.css';
import {goToMentorSignUp} from '../../Components/NavItems';

class MainMenu extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            userRole: '',
        }


    }

    handleMentorSignUp(){
        goToMentorSignUp();
    }

    handleStudentSignUp(){

    }

    /* More components can be added so functions will be added here*/

    render(){
        return (
            <div className="Main-Menu">
                <h2>This is a very Rough Draft</h2>
                <button className="Menu-Button"onClick={this.handleMentorSignUp}>Mentor Sign Up</button>
                <button className="Menu-Button"onClick={this.handleStudentSignUp}>Student Sign Up</button>
            </div>
        )
    }
}

export default MainMenu;