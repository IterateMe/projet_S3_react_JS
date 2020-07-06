import React, {Fragment} from "react";
import Toggle from "../Toggle/Toggle";
import Sidebar from "../Sidebar/Sidebar";



class SidebarLayout extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isOpen: false,
            state: 'sidebar close',
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        let isOpen = this.state.isOpen
        let stateStr;
        if (this.state.state === 'sidebar close'){
            stateStr = 'sidebar'
        }
        else{
            stateStr = 'sidebar close'
        }
        this.setState({isOpen: !isOpen, state: stateStr})
    }

    render(){
        return(
            <Fragment>
                <Sidebar onChangeView={this.handleClick} sidebar={this.state.state} onNextPage={this.props.onNextPage}/>
                <Toggle click={this.handleClick}/>
            </Fragment>    
        )
    }
}

export default SidebarLayout