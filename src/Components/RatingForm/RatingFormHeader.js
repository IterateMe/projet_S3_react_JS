import React from 'react'

class RatingFormHeader extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <h2>Evaluation of {this.props.subject}</h2>
                <h4>{this.props.description}</h4>
                <h3>Please give a mark for each criteria: </h3>
            </div>
        )
    }
}

export default RatingFormHeader;