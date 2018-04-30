import React, { Component } from 'react';
import styles from './styles';

class TaskForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTask(this.state);
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        });
    }

    handleInputChange(e) {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div {...styles}>
                <h2 className="TaskForm__head">Add Task...</h2>
                <form className="TaskForm__body" onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="title"
                            className="TaskForm__body__input"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            placeholder="Title"
                        />
                    </div>
                    <div className="">
                        <input
                            type="text"
                            name="responsible"
                            className="TaskForm__body__input"
                            value={this.state.responsible}
                            onChange={this.handleInputChange}
                            placeholder="Responsible"
                        />
                    </div>
                    <div className="">
                        <input
                            type="text"
                            name="description"
                            className="TaskForm__body__input"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            placeholder="Description"
                        />
                    </div>
                    <div className="">
                        <select
                            name="priority"
                            className="TaskForm__body__select"
                            value={this.state.priority}
                            onChange={this.handleInputChange}
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <button type="submit" className="TaskForm__body__button">
                        Save
                    </button>
                </form>
            </div>
        )
    }
};

export default TaskForm;