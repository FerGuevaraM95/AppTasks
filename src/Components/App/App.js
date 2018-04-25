import React, { Component } from 'react';
import logo from '../../Helpers/Icons/logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <img src={logo} className="App__logo" alt="logo" />
            </div>
        );
    }
}

export default App;
