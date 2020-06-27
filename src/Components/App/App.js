import React from 'react';
import {Route} from 'react-router-dom';
import Acceuil from '../../Route/Acceuil/Acceuil';
import logo from './logoEtNom.jpg'
import SignUpPage from '../../Route/SignUpPage/SignUpPage';
import MainMenu from '../../Route/mainMenu/MainMenuPage.js';
import ChooseCourse from '../../Route/chooseCourses/ChooseCourse';

import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        cip: ""
    };

    this.handleCipChange = this.handleCipChange.bind(this);
  }
  
  handleCipChange(newCip){
    this.setState({cip: newCip})
    console.log(this.state.cip);
  }

  render(){
    return (
      <div className="App">
        <div className="App-Header">
          <img className="HeaderImage" src={logo} alt="School Campus"/>
        </div>
        <div className="App-Main">
          <Route exact path="/" render={(props) => <Acceuil {...props} cipLogin={this.handleCipChange}/>}/>
          <Route exact path="/inscription" render={(props) => <SignUpPage {...props} cipLogin={this.handleCipChange}/>}/>
          <Route exact path="/main-menu" component={MainMenu}/>
          <Route exact path="/mentor-signup" render={(props) => <ChooseCourse {...props} 
            cipLogin={this.state.cip} 
            role={'mentor'}/>}/>
          <Route exact path="/student-signup" render={(props) => <ChooseCourse {...props} 
            cipLogin={this.state.cip} 
            role={'student'}/>}/>
        </div>          
      </div>
    );
  }
}

export default App;