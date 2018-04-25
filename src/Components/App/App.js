import React, { Component } from 'react';
import logo from '../../Helpers/Icons/logo.svg';
import styles from './styles';

class App extends Component {
    render() {
        return (
            <div {...styles}>
                <img src={logo} className="App__logo" alt="logo" />
            </div>
        );
    }
}

export default App;
