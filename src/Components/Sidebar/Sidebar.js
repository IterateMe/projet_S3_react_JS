import './Sidebar.css';
import React from 'react';



class Sidebar extends React.Component{
    constructor(props){
        super(props)

        this.handleClose = this.handleClose.bind(this)
    }

    handleClose(event){
        event.preventDefault()
        this.props.onChangeView()
    }

    render(){
        return(
            <div className ={this.props.sidebar}>
                <h2>Menu</h2>
                <div className="lien">
    
                    <button onClick={() => this.props.onNextPage('main-menu')}>Main Menu</button>
                    <button onClick={() => this.props.onNextPage('student-signup')}>Student Sign Up</button>
                    <button onClick={() => this.props.onNextPage('mentor-signup')}>Mentor Sign Up</button>
                    <button onClick={() => this.props.onNextPage('rating')}>Rating</button>
                    <button onClick={this.handleClose} id="close">&times; Close</button>
                </div>

            </div>
        )
    }
}

export default Sidebar