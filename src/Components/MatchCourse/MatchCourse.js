import React from 'react'
import "./MatchCourse.css"
class MatchCourse extends React.Component {

    constructor(props) {
        super(props);


    }

    render(){
        return (
            <div className="MatchCourse">
                <div className="course-information">
                    <h3>{this.props.course.id}</h3>
                    <p>{this.props.course.student} | {this.props.course.mentor}</p>
                </div>
            </div>
        )
    }
}

export default MatchCourse