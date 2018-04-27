import React, { Component } from 'react';
import logo from '../../Helpers/Icons/logo.svg';
import styles from './styles';

import  { tasks } from '../../tasks.json';
import Navbar from '../Navbar';
import Card from '../Card';
console.log(tasks);

class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks
        }
    };
    render() {
        const tasks = this.state.tasks.map((task, i) => {
            return (
                <div>
                    {task.title}
                </div>
            )
        });

        return (
            <div {...styles}>
                <Navbar title = "Tasks" />
                <Card
                    title = {this.state.title}
                />
                <img src={logo} className="App__logo" alt="logo" />
            </div>
        );
    }
}

export default App;
