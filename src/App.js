import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Acceuil from './Components/Route/Acceuil'
import inscription_mentor from "./Components/Route/inscription_mentor";
import InscriptionEtudiant from './Components/Route/inscription_etudiant';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  
  render(){
    return (
      <div className="App">
          <Route exact path="/" component={Acceuil}/>
          <Route exact path="/inscription-etudiant" component={InscriptionEtudiant}/>
          <Route exact path="/inscription-mentor" component={inscription_mentor}/>
      </div>
    );
  }
}

export default App;