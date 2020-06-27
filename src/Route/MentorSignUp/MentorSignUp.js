import React from 'react';
import CourseResults from '../../Components/CourseResults/CourseResults';
import Zeus from '../../util/Zeus.js';
import Sidebar from "../../Components/Sidebar/Sidebar";
import SidebarLayout from "../../Components/SidebarLayout/SidebarLayout";

class MentorSignUp extends React.Component{
    constructor(props){
        super(props);

        this.state={
            availableCourses: [],
            selectedCourses: []
        };

        this.handleRemove = this.handleRemove.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.search =this.search.bind(this);

        this.search();
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

    search(){
        Zeus.search().then(results => this.setState({availableCourses: results}));
    }

    render(){
        return(
            <div className="Mentor-SignUp">

                <CourseResults selectedCourses={this.state.selectedCourses} 
                    availableCourses={this.state.availableCourses} 
                    onAdd={this.handleAdd} 
                    onRemove={this.handleRemove}/>
            </div>
        )
    }
}

export default MentorSignUp;