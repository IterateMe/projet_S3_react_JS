import React from 'react';
import {Link} from 'react-router-dom';

function to_acceuil(){
    return(
            <li>
                <Link to='/'>Acceuil</Link>
            </li>
    );
}

function goToSignUp(){
    let currentPath = window.location.href;
    let goToPath = currentPath+"inscription";
    window.location.assign(goToPath);
    console.log(goToPath);
}


function to_inscr_etud(){
    return(
        <li>
            <Link to='/inscription-etudiant'>Inscription: Étudiant</Link>
        </li>
    );
}

function to_inscr_mentor(){
    return(
        <li>
            <Link to='/inscription-mentor'>Inscription: Mentor</Link>
        </li>
    );
}

export {to_acceuil};
export {to_inscr_etud};
export {to_inscr_mentor};
export {goToSignUp};