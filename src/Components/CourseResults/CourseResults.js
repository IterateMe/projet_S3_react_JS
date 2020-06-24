import React from 'react';
import CourseList from '../CourseList/CourseList.js';
import './CourseResults.css';

class CourseResults extends React.Component{
    render(){
        return (
            <div className="courseResults">
                <div className="selected">
                <h3>Added Courses</h3>
                    <CourseList courseList={this.props.selectedCourses} isRemovable={true} 
                        onAdd={this.props.onAdd}
                        onRemove={this.props.onRemove}/>
                </div>
                <div className="available">
                <h3>Available Courses</h3>
                    <CourseList courseList = {this.props.availableCourses} isRemovable={false} 
                        onAdd={this.props.onAdd} 
                        onRemove={this.props.onRemove}/>
                </div>             
            </div>
        );
    }
}

export default CourseResults;