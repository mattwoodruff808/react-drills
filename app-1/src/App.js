import React, {Component} from 'react';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ''
    }
  }

  handleChange(e){
    this.setState({userInput: e.target.value});
  }

  render(){
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e)}/>
        <h4>{this.state.userInput}</h4>
      </div>
    )
  }
}

export default App;