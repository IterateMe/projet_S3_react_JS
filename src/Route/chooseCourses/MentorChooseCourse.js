import React from 'react';
import CourseResults from '../../Components/CourseResults/CourseResults';
import Zeus from '../../util/Zeus.js';

class MentorChooseCourse extends React.Component{
    constructor(props){
        super(props);
        this.endPoint = "/chooseCourse";
        this.state={
            availableCourses: [],
            selectedCourses: [],
            role: "mentor"

        };

        this.handleRemove = this.handleRemove.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.search =this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.confirmCourses = this.confirmCourses.bind(this);
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

    search(){
        console.log(this.state.searchTerm);
        Zeus.search(this.state.searchTerm).then(results => this.setState({availableCourses: results}));
    }

    confirmCourses(){
        /*Send a POST request here*/
        /*SelectedCourses get sent*/
        // eslint-disable-next-line no-undef
        const response = postRequest.send(this.state, this.endPoint);
        console.log(response)
    }

    render(){
        return(
            <div className="Mentor-SignUp">
                <CourseResults selectedCourses={this.state.selectedCourses} 
                    availableCourses={this.state.availableCourses} 
                    onAdd={this.handleAdd} 
                    onRemove={this.handleRemove}
                    onConfirm={this.confirmCourses}
                    onTermChange={this.handleTermChange}
                    onSearch={this.search}/>
            </div>
        )
    }
}

export default MentorChooseCourse;