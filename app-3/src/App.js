import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      arr: ['Shards', 'Investiture', 'Connection', 'Intent', 'Spren', 'Metals', 'Shardblades', 'Dogs', 'Moon Scepter'],
      userInput: ''
    }
  }

  handleChange(e){
    this.setState({userInput: e.target.value})
  }

  render(){
    let listDisplay = this.state.arr
      .filter((item) => {
        return item.includes(this.state.userInput)
      })
      .map((item, i) => {
        return <h2 key={i}>{item}</h2>
      })

    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e)}/>
        {listDisplay}
      </div>
    )
  }
}

export default App;