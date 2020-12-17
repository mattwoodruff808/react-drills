import React, {Component} from 'react';
import NewTask from './Components/NewTask';
import List from './Components/List';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      taskArr: []
    }

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task){
    this.setState({taskArr: [...this.state.taskArr, task]})
  }

  render(){
    return (
      <div className='App'>
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask}/>
        <List items={this.state.taskArr}/>
      </div>
    )
  }
}

export default App;