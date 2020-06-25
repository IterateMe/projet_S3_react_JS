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


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  
  render(){
    return (
      <div className="App">
        <div className="App-Header">
          <img className="HeaderImage" src={logo} alt="School Campus"/>
        </div>
        <div className="App-Main">
          <Route exact path="/" component={Acceuil}/>
          {/*<Route exact path="/inscription-etudiant" component={InscriptionEtudiant}/>*/}
          {/*<Route exact path="/inscription-mentor" component={inscription_mentor}/>*/}
          <Route exact path="/inscription" component={SignUpPage}/>
          <Route exact path="/main-menu" component={MainMenu}/>
          <Route exact path="/mentor-signup" component={MentorChooseCourse}/>
          <Route exact path="/student-signup" component={StudentChooseCourse}/>
        </div>          
      </div>
    );
  }
}

export default App;