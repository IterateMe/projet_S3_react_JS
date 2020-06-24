import React from 'react';
import './Course.css';

class Course extends React.Component{
    constructor(props){
        super(props);

        this.addCourse = this.addCourse.bind(this);
        this.removeCourse = this.removeCourse.bind(this);
    }

    addCourse(){
        this.props.onAdd(this.props.course);
    }

    removeCourse(){
        this.props.onRemove(this.props.course);
    }
    render(){
        return (
            <div className="course">
                <div className="course-information">
                    <h3>{this.props.course.name}</h3>
                    <p>{this.props.course.artist} | {this.props.course.album}</p>
                </div>
                <button className="course-action"
                        onClick={this.props.isRemovable? this.removeCourse: this.addCourse}>
                    {this.props.isRemovable? 'Remove': 'Add'}
                </button>
            </div>
        )
    }
}

export default Course;