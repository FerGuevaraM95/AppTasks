import React from 'react';
import styles from './styles';

const Navbar = (props) => (
    <nav {...styles}>
        <h1 className="Navbar__title">
            {props.title}
        </h1>     
    </nav>
);

export default Navbar;
