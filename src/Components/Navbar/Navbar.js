import React from 'react';
import styles from './styles';

const Navbar = (props) => (
    <nav {...styles}>
        <h1 className="Navbar__title">
            {props.title}
            <span className="Navbar__count">{props.tasks.length}</span>
        </h1>   
    </nav>
);

export default Navbar;
