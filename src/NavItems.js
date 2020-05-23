import React from 'react';
import {Link} from 'react-router-dom';

function to_acceuil(){
    return(
            <li>
                <Link to='/'>Acceuil</Link>
            </li>
    );
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