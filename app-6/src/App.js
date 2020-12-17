import React, {Component} from 'react';
import Todo from './Components/Todo'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: '',
      listArr: []
    }
  }

  handleChange(e){
    this.setState({userInput: e.target.value})
  }

  addTask(){
    let taskDisplay = this.state.listArr.slice();

    taskDisplay.push(this.state.userInput)

    this.setState({
      listArr: taskDisplay,
      userInput: ''
    })
  }

  render(){
    return (
      <div className='App'>
        <h1>My to-do list:</h1>
        <input placeholder='Enter new task' value={this.state.userInput} onChange={(e) => this.handleChange(e)}/>
        <button onClick={() => this.addTask()}>Add</button>
        {this.state.listArr.map((item, i) => (<Todo key={i} item={item}/>))}
      </div>
    )
  }
}

export default App;