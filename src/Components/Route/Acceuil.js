import React from 'react';
import {to_inscr_mentor, to_inscr_etud} from '../NavItems'


class Acceuil extends React.Component{
    render(){
        return(
            <div>
                <h1>ACCEUIL</h1>
                <ul>
                    {to_inscr_mentor()}
                    {to_inscr_etud()}
                </ul>
            </div>    
        );
    }
}

export default Acceuil;
