import React, {useState} from "react";
import './Sidebar.css';
import {render} from "react-dom";
import Acceuil from "../../Route/Acceuil/Acceuil";
import MainMenu from "../../Route/mainMenu/MainMenuPage";





const Sidebar = (props) => {

    const[sidebarClass, setSidebarClass] = useState(props.sidebar)




    const closeHandler = (e) => {
        e.preventDefault()
        setSidebarClass("sidebar close")
        setTimeout(() => {
            props.close()
        },1000)
    }

    let componentRender;



    return(
        <div className ={sidebarClass}>
            <h2>Menu</h2>
            <div className="lien">

                <button onClick={() =>alert('hello')}>Main Menu</button>
                <button onClick={null}>Student Sign Up</button>
                <button onClick={null}>Mentor Sign Up</button>
            </div>
            <button onClick={closeHandler} id="close">&times; close</button>
        </div>
    )
}

export default Sidebar