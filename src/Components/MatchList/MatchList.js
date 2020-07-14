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
            mentoredList : testCourses
        }
        //TutoApp.getCourseAsStudent(this.props.cip).then(result => this.setState({
        //     mentoredList: result
        //}))

     TutoApp.getCourseAsMentorConfirmed(this.props.cip).then(result => this.setState({
         mentoringList: result
     }))
    }

    render(){
        return (
            <div className="MatchList">
                <h2>Cours que je mentor</h2>
                <ul>
                    {
                        this.state.mentoringList.map((course) => {
                            return (<li key={course.id}><MatchCourse course={course}/></li>);
                        })
                    }
                </ul>
                <h2>Cours pour lesquels je suis mentoré</h2>
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

