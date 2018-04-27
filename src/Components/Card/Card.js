import React, { Component } from 'react';
import PropTypes from "prop-types";

import styles from './styles';

const propTypes = {
    title:  PropTypes.string,
    priority: PropTypes.string,
    description: PropTypes.string,
    responsible: PropTypes.string
};

const defaultProps = {
    title: "Task",
    priority: "low",
    description: "lorem ipsum",
    responsible: "none"
};

class Card extends Component {

    render() {
        return(
            <div {...styles}>
                <div className="Card__head">
                    <h1>{this.props.title}</h1>
                    <span>{this.props.priority}</span>
                </div>
                <div className="Card__body">
                    <p className="Card__body__description">{this.props.description}</p>
                    <p className="Card__body__responsible">{this.props.responsible}</p>
                </div>
            </div>
        );
    }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
