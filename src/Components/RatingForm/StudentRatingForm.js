import React from 'react'
import RatingFormHeader from "./RatingFormHeader";
import StarsRater from "./StarsRater"
class StudentRatingForm extends React.Component{
   constructor(props) {
       super(props);
       this.state = {};
   }

   handleFieldChange(fieldId, value){
       this.setState({[fieldId]: value})
   }

   render() {
       return(
           <div>
           <RatingFormHeader subjet = {this.props.subject} description = {this.props.description}/>
           <form>
               <label>
                   L'étudiant démontre une volonté d'apprendre:
                   <StarsRater/>
               </label>
           </form>
           </div>
       )
   }




}
export default StudentRatingForm