import React from "react";

class StarsRater extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentRating: 1,
            maxRating: 5
        }
        this.star = process.env.PUBLIC_URL + '/images/filled_star.png'
        this.emptyStar = process.env.PUBLIC_URL + '/images/empty_star.png'
    }

    starClicked(event) {
        event.preventDefault()
        this.setState({
            currentRating: event.target.id
        });
    }

    render() {
        let ratingBar = [];
        for (let i = 1; i <= this.state.maxRating; i++) {
            ratingBar.push(
                <img height='20dp' width='20dp' alt="etoile" id={i} onClick={this.starClicked.bind(this)} src={
                    i <= this.state.currentRating ? this.star : this.emptyStar
                }
                />
            );
        }
        return (
            <div>
                {ratingBar}
            </div>
        )
    }


}

export default StarsRater