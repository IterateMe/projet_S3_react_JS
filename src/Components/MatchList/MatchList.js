import React from 'react'
import './MatchList.css'
import MatchCourse from "../MatchCourse/MatchCourse";
import TutoApp from "../../util/TutoApp";


class MatchList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mentoringList : [],
            mentoredList : []
        }
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

