import React from 'react';
import {goToInscriptionMentor, goToInscriptionEtudiant} from '../../Components/NavItems';
import SignInPage from '../SignInPage/SignInPage.js';

import './Acceuil.css';


class Acceuil extends React.Component{
    render(){
        return(
            <div className="Acceuil">
                <div className="Acceuil-Main">
                    <SignInPage/>
                </div>  
            </div>
        );
    }
}

export default Acceuil;
