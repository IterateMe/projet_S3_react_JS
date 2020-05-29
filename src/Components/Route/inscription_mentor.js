import React from 'react';
import {to_acceuil, to_inscr_etud} from "../NavItems";

function inscription_mentor(){
    return(
        <div>
            <h1>INSCRIPTION-MENTOR</h1>
            <IdForm />
            <ChoisirCours />
            <input type="submit" value="Envoyer"/>
            <ul>
                {to_acceuil()}
                {to_inscr_etud()}
            </ul>
        </div>
    );
}

class IdForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            email: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render() {
        return (
            <form>
                <p>Nom:</p>
                <input type='text' onChange={this.myChangeHandler} autoComplete='on' name='nom'/>
                <p>Prenom:</p>
                <input type='text' onChange={this.myChangeHandler} autoComplete='on' name='prenom'/>
                <p>E-mail:</p>
                <input type='email' onChange={this.myChangeHandler} autoComplete='on' name='email'/>
            </form>
        );
    }
}

class ChoisirCours extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GEN280: '',
            GEN400: '',
            GENAVC: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render() {
        return (
            <form>
                <div><label><input type='checkbox' onChange={this.myChangeHandler}  name='GEN280' />GEN280</label></div>
                <div><label><input type='checkbox' onChange={this.myChangeHandler}  name='GEN400' />GEN400</label></div>
                <div><label><input type='checkbox' onChange={this.myChangeHandler}  name='GENAVC' />GENAVC</label></div>
            </form>
        );
    }
}

export default inscription_mentor;