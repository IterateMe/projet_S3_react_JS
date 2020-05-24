import React from 'react';
import {to_acceuil, to_inscr_etud, to_inscr_mentor} from "../NavItems";

function inscription_etudiant(){
    return(
        <div>
            <h1>INSCRIPTION ETUDIANT</h1>
            <ul>
                {to_inscr_mentor()}
                {to_acceuil()}
                {to_inscr_etud()}
            </ul>
            <MyForm />
        </div>

    );
}

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mycar: 'Volvo'};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({mycar: event.target.value})
    };

    render() {
        return (
            <form>
                <select value={this.state.mycar} onChange={this.handleChange}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </form>
        );
    }
}

export default inscription_etudiant;