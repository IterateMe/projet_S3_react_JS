import React, {Fragment, useState} from "react";
import Toggle from "../Toggle/Toggle";
import Sidebar from "../Sidebar/Sidebar";


const SidebarLayout = ({children}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openHandler = () =>{
        if(!sidebarOpen){
            setSidebarOpen(true)
        }else{
            setSidebarOpen(false)
        }
    }

    const sidebarCloseHandler = () =>{
        setSidebarOpen(false)
    }

    let sidebar
    if(sidebarOpen){
        sidebar = <Sidebar close={sidebarCloseHandler} sidebar={"sidebar"}/>
    }


    return(

        <Fragment>
            {sidebar}
            <Toggle click={openHandler}/>
        </Fragment>

    )
}

export default SidebarLayout