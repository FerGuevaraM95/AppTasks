import React from 'react';
import PropTypes from "prop-types";
import Card from '../Card';

import styles from './styles';

const propTypes = {
    tasks: PropTypes.array
};

const defaultProps = {
    tasks: []
};

const CardList = (props) => {
    const { isLoading, tasks } = props;
    return (
        <div {...styles}>
            {
                isLoading
                    ? <div className="containerCards__loading"><h1>Loading...</h1></div>
                    : props.tasks.map((task, index) => (
                        <Card
                            key={task.index}
                            title={task.title}
                            priority={task.priority}
                            description={task.description}
                            responsible={task.responsible}   
                        />
                    ))
            }
        </div>
    );
};

CardList.propTypes = propTypes;
CardList.defaultProps = defaultProps;

export default CardList;