import React from 'react';
import './CourseList.css';
import Course from '../Course/Course.js';

class CourseList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="CourseList">
                <ul>
                    {this.props.courseList.map((course)=>{
                        return (<li key={course.id}><Course course={course} 
                                isRemovable={this.props.isRemovable}
                                onAdd={this.props.onAdd}
                                onRemove={this.props.onRemove}/></li>);
                                })}
                </ul>
            </div>
        );
    }
}

export default CourseList;