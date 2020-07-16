import React from 'react'
import './MatchList.css'
import MatchCourse from "../MatchCourse/MatchCourse";
import TutoApp from "../../util/TutoApp";

let testCourses = [
    {
        id: 1,
        semester: "E20",
        student: "boul0902",
        mentor: "frev2701"
    },
    {
        id: 2,
        semester: "E20",
        student: "boul0902",
        mentor: "frev2701"
    },
    {
        id: 3,
        semester: "E20",
        student: "boul0902",
        mentor: "frev2701"
    },
    {
        id: 4,
        semester: "E20",
        student: "boul0902",
        mentor: "frev2701"
    },
    {
        id: 5,
        semester: "E20",
        student: "boul0902",
        mentor: "frev2701"
    },

]
class MatchList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mentoringList : [],
            mentoredList : []
        }

        this.match = this.match.bind(this)
        this.getMatchedCourses = this.getMatchedCourses.bind(this);
        this.reset = this.reset.bind(this);
        this.getMatchedCourses();
    }

    match(){
        console.log('Matching....');
        TutoApp.createMatches().then(() => this.getMatchedCourses());
    }

    reset(){
        console.log('Resetting....');
        TutoApp.resetMatches();
        this.setState({
            mentoringList : [],
            mentoredList : []
        })
    }

    getMatchedCourses(){
        TutoApp.getCourseAsStudent(this.props.cip).then(result => this.setState({
            mentoredList: result
       }))

       TutoApp.getCourseAsMentorConfirmed(this.props.cip).then(result => this.setState({
           mentoringList: result
       }))
    }

    render(){
        return (
            <div className="MatchList">
                <button className="testButton" onClick={this.match}>Match Test</button>
                <button className="testButton" onClick={this.reset}>Reset Matches</button>
                <h2>Courses as a Mentor</h2>
                <ul>
                    {
                        this.state.mentoringList.map((course) => {
                            return (<li key={course.id}><MatchCourse course={course}/></li>);
                        })
                    }
                </ul>
                <h2>Courses as a student</h2>
                <ul>
                    {
                        this.state.mentoredList.map((course) => {
                            return (<li key={course.id}><MatchCourse course={course}/></li>);
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MatchList;

