import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Acceuil from './Acceuil'
import inscription_etudiant from "./inscription_etudiant";
import inscription_mentor from "./inscription_mentor";


function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Acceuil}/>
        <Route exact path="/inscription-etudiant" component={inscription_etudiant}/>
        <Route exact path="/inscription-mentor" component={inscription_mentor}/>
    </div>
  );
}

export {App};
/*
<Route exact path="/" component={Acceuil}/>
<Route exact path="/inscription-etudiant" component={inscription_etudiant}/>
<Route exact path="/inscription-mentor" component={inscription_mentor}/>
*/