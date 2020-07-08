import React from 'react'
import RatingFormHeader from "./RatingFormHeader";
import StarsRater from "./StarsRater"
import form from "./RatingForm.css"
class StudentRatingForm extends React.Component{

   constructor(props) {
       super(props);

       this.state = {maxChars: 256};
       this.fields = [
           {
               id: "rating1",
               label: "L'étudiant démontre une volontée d'apprendre"
           },
           {
               id: "rating2",
               label: "L'étudiant est ponctuel"
           },
           {
               id: "rating3",
               label: "Je serais prêt à ravoir cet étudiant"
           }
       ]

       this.handleFieldChange = this.handleFieldChange.bind(this)
   }

   handleFieldChange(fieldId, value){
       this.setState({ [fieldId]: value });
   }

   handleTextAreaChange(event){
       this.setState({ [event.target.id]: event.target.value});
   }

   render() {
       const fields = this.fields.map(field => (
           <StarsRater
                key={field.id}
                id ={field.id}
                onChange={this.handleFieldChange}
                value={this.state[field]}
                label={field.label}
           />
       ));

       let remainingChars = this.state["comment1"]? this.state.maxChars-(this.state["comment1"]).length:this.state.maxChars;

       return(
           <div id="customDiv" className={form}>
               <RatingFormHeader subject="BOUBOUL" description="Le sk8ter boi"/>
               {fields}
               <h4>Commentaires:</h4>
               <h5 id="infoText"> Caractère restant: {remainingChars} </h5>
               <textarea id="comment1" maxLength={this.state.maxChars} onChange={this.handleTextAreaChange.bind(this)}/>
               <p/>
               <button id="soumettre">Soumettre</button>
               </div>
       )
   }




}
export default StudentRatingForm