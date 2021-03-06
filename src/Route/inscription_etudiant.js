import React from 'react';
import {to_acceuil, to_inscr_mentor} from "../NavItems";


class InscriptionEtudiant extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            mentor: "",
            cours: "",
            prog: ""
        };
    }

    setMentor(e){
        this.setState({mentor: e.target.value})
    }

    setCours(e){
        this.setState({cours: e.target.value})
    }

    setProg(e){
        this.setState({prog: e.target.value})
    }

    render(){
        return(
            <div>
                <h1>TROUVER UN MENTOR</h1>
                <ul>
                    {to_acceuil()}
                    {to_inscr_mentor()}
                </ul>
                <MentorSelect onChange={this.setMentor()}/>
                <CourSelect />
                <ProgSelect />
                <input type="submit" value="Envoyer"/>
            </div>
        );
    }
}

class MentorSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {val: 'Mentor 1'};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({val: event.target.value});
    };

    render() {
        return (
                <select value={this.state.val} onChange={this.handleChange}>
                    <option value="Mentor 1">Mentor 1</option>
                    <option value="Mentor 2">Mentor 2</option>
                    <option value="Mentor 3">Mentor 3</option>
                </select>
        );
    }
}

class ProgSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {val: 'GI'};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({val: event.target.value})
    };

    render() {
        return (

                <select value={this.state.val} onChange={this.handleChange}>
                    <option value="GI">GI</option>
                    <option value="GE">GE</option>
                    <option value="GRO">'G'RO</option>
                </select>

        );
    }
}

class CourSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {val: 'GEN280'};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({val: event.target.value})
    };

    render() {
        return (

                <select value={this.state.val} onChange={this.handleChange}>
                    <option value="GEN280">GEN280</option>
                    <option value="GEN400">GEN400</option>
                    <option value="Cours su 'es ACV">Cours su 'es ACV</option>
                </select>

        );
    }
}


export default InscriptionEtudiant;

