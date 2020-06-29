import React from 'react';
import CourseList from '../CourseList/CourseList.js';
import './CourseResults.css';

class CourseResults extends React.Component{
    constructor(props){
        super(props);
        this.handleSemesterChange = this.handleSemesterChange.bind(this);
    }

    handleSemesterChange(event){
        this.props.onTermChange(event.target.value);
    }
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
                <form>
                    <label>Semester</label>
                    <input type="text" placeholder="Exemple: E20" onChange={this.handleSemesterChange}/>
                </form>
                <button onClick={this.props.onSearch} className="search-button">Search</button> 
                <h3>Available Courses</h3>
                    <CourseList courseList = {this.props.availableCourses} isRemovable={false} 
                        onAdd={this.props.onAdd} 
                        onRemove={this.props.onRemove}/>
                </div>
                <button onClick={this.props.onConfirm} className="confirm-button">Confirm</button><br/>
                <button onClick={this.props.onBack} className="confirm-button">Back</button>             
            </div>
        );
    }
}

export default CourseResults;