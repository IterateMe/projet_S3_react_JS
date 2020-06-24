import React from 'react';
import {goToInscriptionMentor, goToInscriptionEtudiant} from '../NavItems'

class Acceuil extends React.Component{
    render(){
        return(
            <div>
                <h1>ACCEUIL</h1>
                <ul>
                    <button onClick={goToInscriptionMentor}>Incription Mentor</button><br/>
                    <button onClick={goToInscriptionEtudiant}>Incription Etudiant</button>
                </ul>
            </div>    
        );
    }
}

export default Acceuil;