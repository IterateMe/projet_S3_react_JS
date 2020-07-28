import React from 'react'
import RatingFormHeader from "./RatingFormHeader";
import StarsRater from "./StarsRater"
import form from "./RatingForm.css"
import TutoApp from "../../util/TutoApp";
class StudentRatingForm extends React.Component{

   constructor(props) {
       super(props);

       this.state = {};
       this.maxChars= 256;
       this.fields = [
           {
               id: "rating1",
               label: "The student demonstrates a will to learn"
           },
           {
               id: "rating2",
               label: "The student arrives on time"
           },
           {
               id: "rating3",
               label: "I would like to teach this student again"
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

   handleButtonClicked(event){
       event.preventDefault()
       let note =0;
       this.fields.map(field=>(
           note+= this.state[field.id]
       ));
       note /= this.fields.length
       let commentaire = this.state["comment1"]? this.state["comment1"]: null
       let dataTosend = {
            cip : this.props.subject,
           statut_id : 0, //mentoré
           cours_id : this.props.cours_id,
           donnee_par : this.props.cip,
           note: note,
           commentaire : commentaire
       }
       let response = TutoApp.send(dataTosend,"/tutoratApp/api/notes")
       console.log(response)
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

       let remainingChars = this.state["comment1"]? this.maxChars-(this.state["comment1"]).length:this.maxChars;

       return(
           <div id="customDiv" className={form}>
               <RatingFormHeader subject="Ludovic Boulanger" description="GIF350 - Modèles de conception"/>
               {fields}
               <h4>Comments:</h4>
               <h5 id="infoText"> Characters left: {remainingChars} </h5>
               <textarea id="comment1" maxLength={this.state.maxChars} onChange={this.handleTextAreaChange.bind(this)}/>
               <p/>
               <button id="soumettre">Submit</button>
               </div>
       )
   }




}
export default StudentRatingForm