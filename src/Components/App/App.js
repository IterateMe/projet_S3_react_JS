import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Acceuil from '../../Route/Acceuil/Acceuil';
//import inscription_mentor from "../Route/inscription_mentor";
//import InscriptionEtudiant from '../Route/inscription_etudiant';
import logo from './logoEtNom.jpg'
import SignUpPage from '../../Route/SignUpPage/SignUpPage';
import MainMenu from '../../Route/mainMenu/MainMenuPage.js';
import MentorChooseCourse from '../../Route/chooseCourses/MentorChooseCourse';
import StudentChooseCourse from '../../Route/chooseCourses/StudentChooseCourse';
import SignInPage from "../../Route/SignInPage/SignInPage";
import SignUp from "../SignUp/SignUp";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        cip: ""
    };
  }
  
  render(){
    return (
      <div className="App">
        <div className="App-Header">
          <img className="HeaderImage" src={logo} alt="School Campus"/>
        </div>
        <div className="App-Main">
<<<<<<< HEAD
          <Route exact path="/" render={(props) => <Acceuil {...props} cipLogin={this.state.cip}/>}/>
          {/*<Route exact path="/inscription-etudiant" component={InscriptionEtudiant}/>*/}
          {/*<Route exact path="/inscription-mentor" component={inscription_mentor}/>*/}
          <Route exact path="/inscription" render={(props) => <SignUpPage {...props} cipLogin={this.state.cip}/>}/>
=======
          <Route exact path="/" component={Acceuil}/>
          <Route exact path="/inscription" component={SignUpPage}/>
>>>>>>> c4dd822a1085d2d0918ccf876dd573d539b3c303
          <Route exact path="/main-menu" component={MainMenu}/>
          <Route exact path="/mentor-signup" render={(props) => <MentorChooseCourse {...props} cipLogin={this.state.cip}/>}/>
          <Route exact path="/student-signup" component={StudentChooseCourse}/>
        </div>          
      </div>
    );
  }
}

export default App;