import React, {Component} from 'react';

class Todo extends Component {
    render(){
        return (
            <div>
                <h3>{this.props.item}</h3>
            </div>
        )
    }
}

export default Todo;