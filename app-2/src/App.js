import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      arr: ['Kaladin', 'Adolin', 'Shallan', 'Dalinar', 'Jasnah', 'Navani']
    }
  }

  render(){
    let arrList = this.state.arr.map((item, i) => {
      return <h2 key={i}>{item}</h2>
    })

    return (
      <div className="App">
        {arrList}
      </div>
    )
  }
}

export default App;