import React, {Component} from 'react';
import Image from './Components/Image';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      imgUrl: 'https://www.hitc.com/static/uploads/hitcn/1558/star_wars_the_rise_of_skywalker_1317029.jpg'
    }
  }

  render(){
    return (
      <div className='App'>
        <Image 
          image={this.state.imgUrl}/>
      </div>
    )
  }
}

export default App;