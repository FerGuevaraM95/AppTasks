import React, { Component } from 'react';
import logo from '../../Helpers/Icons/logo.svg';
import styles from './styles';

import  { tasks } from '../../tasks.json';
import Navbar from '../Navbar';
import TaskForm from '../TaskForm';
import CardList from '../CardList';

console.log(tasks);

class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks,
            isLoading: false
        }
        this.handleAddTask = this.handleAddTask.bind(this);
    };

    handleAddTask(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    render() {
        return (
            <div {...styles}>
                <Navbar title="Tasks" tasks={this.state.tasks} />
                <div className="container">
                    <div>
                        <img src={logo} className="App__logo" alt="logo" />
                        <TaskForm onAddTask={this.handleAddTask} />
                    </div>
                    <CardList
                        tasks={this.state.tasks}
                        isLoading={this.state.isloading}
                    />
                </div>
            </div>
        );
    }
}

export default App;
