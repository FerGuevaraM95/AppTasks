import React, { Component } from 'react';
import logo from '../../Helpers/Icons/logo.svg';
import styles from './styles';

import  { tasks } from '../../tasks.json';
import Navbar from '../Navbar';
import CardList from '../CardList';

console.log(tasks);

class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks,
            isLoading: false
        }
    };
    render() {
        // const tasks = this.state.tasks.map((task, i) => {
        //     return (
        //         <div>
        //             {task.title}
        //         </div>
        //     )
        // });
        // <img src={logo} className="App__logo" alt="logo" />

        return (
            <div {...styles}>
                <Navbar title = "Tasks" />
                <CardList
                    tasks = {this.state.tasks}
                    isLoading={this.state.isloading}
                />
            </div>
        );
    }
}

export default App;
