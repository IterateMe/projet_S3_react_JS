import React from "react";

class StarsRater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentRating: 1,
            maxRating: 5,
            selectedRating: 1
        }
        this.star = process.env.PUBLIC_URL + '/images/filled_star.png'
        this.emptyStar = process.env.PUBLIC_URL + '/images/empty_star.png'
    }

    starClicked(event) {
        event.preventDefault()
        this.props.onChange(this.props.id, event.target.id)
        this.setState({
            currentRating: event.target.id,
            selectedRating: event.target.id
        });
    }

    onMouseEnter(event) {
        this.setState({
            currentRating: event.target.id
        });
    }

    onMouseLeave(event) {
        this.setState({
            currentRating: this.state.selectedRating
        });
    }

    render() {
        let ratingBar = [];
        for (let i = 1; i <= this.state.maxRating; i++) {
            ratingBar.push(
                <img height='20dp' width='20dp' alt="etoile" id={i}
                     onClick={this.starClicked.bind(this)}
                     onMouseEnter={this.onMouseEnter.bind(this)}
                     onMouseLeave={this.onMouseLeave.bind(this)}
                     src={
                         i <= this.state.currentRating ? this.star : this.emptyStar
                     }
                />
            );
        }
        return (
            <div>
                <h4>{this.props.label}</h4>
                {ratingBar}
            </div>
        )
    }


}

export default StarsRater