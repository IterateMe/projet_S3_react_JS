import React, {Fragment} from "react";
import "./Toggle.css"
import {goToMainMenu, goToMentorSignUp} from "../NavItems";

const Toggle = (props) =>{
    return(
        <Fragment>
            <button id="toggle" onClick={props.click}>&#8801;</button>
        </Fragment>
    )
}

export default Toggle