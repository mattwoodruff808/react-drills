import React, {Component} from 'react';

class NewTask extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
        }
    }

    handleChange(e){
        this.setState({userInput: e.target.value})
    }

    addTask(){
        this.props.add(this.state.userInput);
        this.setState({userInput: ''})
    }

    render(){
        return (
            <div>
                <input placeholder='Enter new task' value={this.state.userInput} onChange={(e) => this.handleChange(e)}/>
                <button onClick={() => this.addTask()}>Add</button>
            </div>
        )
    }
}

export default NewTask;