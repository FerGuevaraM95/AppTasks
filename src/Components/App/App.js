import React, { Component } from 'react';
import logo from '../../Helpers/Icons/logo.svg';
import styles from './styles';

import  { tasks } from '../../tasks.json';
import Navbar from '../Navbar';
console.log(tasks);

class App extends Component {
    render() {
        return (
            <div {...styles}>
                <Navbar title="Tasks" />
                <img src={logo} className="App__logo" alt="logo" />
            </div>
        );
    }
}

export default App;
