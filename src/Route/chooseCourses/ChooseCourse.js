import React from 'react';
import CourseResults from '../../Components/CourseResults/CourseResults';
import Zeus from '../../util/Zeus.js';
import TutoApp from '../../util/TutoApp';
import { goToMainMenu } from '../../Components/NavItems';

class ChooseCourse extends React.Component{
    constructor(props){
        super(props);
        this.endPoint = "/chooseCourse";
        this.state={
            availableCourses: [],
            selectedCourses: [],
            role: this.props.role,
            cip: this.props.cipLogin,
            semester: ""
        };

        this.handleRemove = this.handleRemove.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.search =this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.confirmCourses = this.confirmCourses.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleSemesterChange = this.handleSemesterChange.bind(this)
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

    handleTermChange(term){
        this.setState({searchTerm: term});
    }

    handleBack(){
        this.props.onNextPage('main-menu');
    }

    search(){
        let coursesToAdd = [];
        if(!this.state.searchTerm || !this.state.cip){
            alert('Did you select a search semester or did you sign in?');
        } else if(this.state.searchTerm.length != 3){
            alert('Invalid semester format');
        } else {
           coursesToAdd = Zeus.search(this.state.searchTerm,this.state.cip)
                .then(results => Zeus.getStudiedCourses(this.state.cip, results))
                .then(results => this.setState({availableCourses: results}))
                .then(()=>{
                    if (this.state.availableCourses.length == 0){
                        alert('No courses found');
                    }
                })
        }
    }

    confirmCourses(){
        let dataToSend = []

        this.state.selectedCourses.forEach((course) => {
            dataToSend.push({
                cip: this.state.cip,
                session_id: this.state.semester,
                status_id: this.state.role,
                cours_id: course.name
            })
        })
        TutoApp.send(dataToSend, '/tutoratApp/api/users/inscription').then(response => {
            if (response){
                this.handleBack()
            } else {
                alert('An error occured');
            }
        })
    }

    handleSemesterChange(semester){
        this.setState(semester)
    }

    render(){
        return(
            <div className="Mentor-SignUp">
                <CourseResults
                    selectedCourses={this.state.selectedCourses}
                    availableCourses={this.state.availableCourses}
                    semesterID = {this.handleSemesterChange}
                    onAdd={this.handleAdd} 
                    onRemove={this.handleRemove}
                    onConfirm={this.confirmCourses}
                    onTermChange={this.handleTermChange}
                    onSearch={this.search}
                    onBack={this.handleBack}
                />
            </div>
        )
    }
}

export default ChooseCourse;