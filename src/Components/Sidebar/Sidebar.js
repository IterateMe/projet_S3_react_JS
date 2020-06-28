import React, {useState} from "react";
import './Sidebar.css';
import {render} from "react-dom";
import {Route} from "react-router-dom";
import {goToMainMenu, goToMentorSignUp, goToStudentSignUp} from "../NavItems";



const Sidebar = (props) => {

    const[sidebarClass, setSidebarClass] = useState(props.sidebar)

    const closeHandler = (e) => {
        e.preventDefault()
        setSidebarClass("sidebar close")
        setTimeout(() => {
            props.close()
        },1000)
    }

    return(
        <div className ={sidebarClass}>
            <h2>Menu</h2>
            <div className="lien">

                <button onClick={this.props.onNextPage('main-menu')}>Main Menu</button>
                <button onClick={this.props.onNextPage('student-signup')}>Student Sign Up</button>
                <button onClick={this.props.onNextPage('mentor-signup')}>Mentor Sign Up</button>
            </div>
            <button onClick={closeHandler} id="close">&times; close</button>
        </div>
    )
}

export default Sidebar