import React from 'react'

class RatingFormHeader extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <h2>Notation de {this.props.subject}</h2>
                <h4>{this.props.description}</h4>
                <h3>Veuillez attribuer un note pour les différents critères: </h3>
            </div>
        )
    }
}

export default RatingFormHeader;