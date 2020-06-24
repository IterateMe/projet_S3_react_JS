import React from 'react';
import SignUp from '../../Components/SignUp/SignUp.js';
import CourseResults from '../../Components/CourseResults/CourseResults.js';
import Zeus from '../../util/Zeus.js';

import './SignUpPage.css';

class SignUpPage extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            username:'',
            password: '',
            role: '',
            availableCourses: [],
            selectedCourses: []
        }

        this.handleRemove = this.handleRemove.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSignUpClicked = this.handleSignUpClicked.bind(this);
        this.searchCourses = this.searchCourses.bind(this);
    }

    handleRemove(courseToRemove){
        let newCourses = [];
        for(let i=0;i<this.state.selectedCourses.length;i++){
          if(!(this.state.selectedCourses[i].id === courseToRemove.id)){
            newCourses.push(this.state.selectedCourses[i]);
          }
        }
        this.setState({selectedCourses: newCourses});
    }
    
      handleAdd(courseToAdd){
        console.log(courseToAdd);
        let alreadyInCourses = false;
        for (let i=0;i<this.state.selectedCourses.length;i++){
          if (this.state.selectedCourses[i].id===courseToAdd.id){
            alreadyInCourses = true;
          }
        }
        if (!alreadyInCourses){
          let newArray = this.state.selectedCourses;
          newArray.push(courseToAdd);
          this.setState({selectedCourses: newArray});
        }
    }
    
      handleSignUpClicked(){
        this.setState({signUp: true, signIn: false});
    }

    searchCourses(){
        Zeus.search().then((searchResults)=>this.setState({availableCourses: searchResults}));
    }

    render(){
        return(
            <div className="SignUpPage">
                <SignUp onSearch={this.searchCourses}/>
                <CourseResults onAdd={this.handleAdd} 
                                onRemove={this.handleRemove} 
                                selectedCourses={this.state.selectedCourses} 
                                availableCourses={this.state.availableCourses}/>
            </div>
        );
    }
}

export default SignUpPage;