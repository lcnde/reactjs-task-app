// this will handle the input field with the logic
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {text: ''},
      tasks: [],
    };
  }

  //the handleChange function sets the current task in state to whatever
  //we type in our input field
  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value, //target finds out which element has triggered a specific event.
      }                       //my guess is that it find who triggered the event and then the  
    });                       //value of the event
  };

  //the reason that we dont use push() to assign the task to the array is because we
  //cannot directly modify the state
  onSubmitTask = (e) => {
    e.preventDefault();//this doesnt allow the form to be refreshed after we submit it
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {text: ''}
    })
  }

  render() {
    const { task, tasks } = this.state //this is a deconstructor so you dont have to call everytime this.state.task

    return(
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter Task</label>
          <input
          onChange={this.handleChange}//triggers when a user changes the content of an input element
          value={task.text}//submits the value of task.text that is assigned by handleChange()
          type="text" 
          id="taskInput"></input>
          <button type="submit">
            Add Task
          </button>
        </form>
      </div>
    )
  }
}

export default App;
