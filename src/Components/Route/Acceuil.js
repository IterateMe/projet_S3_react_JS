import React from 'react';
import {to_acceuil, to_inscr_mentor, to_inscr_etud} from '../NavItems'

function Acceuil(){
    return(
        <div>
            <h1>ACCEUIL</h1>
            <ul>
                {to_inscr_mentor()}
                {to_acceuil()}
            </ul>
        </div>

    );
}

export default Acceuil;