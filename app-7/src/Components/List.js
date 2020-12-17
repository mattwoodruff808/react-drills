import React, {Component} from 'react';
import Todo from './Todo';

class List extends Component {
    render(){
        let taskArr = this.props.items.map((element, i) => {
            return <Todo key={i} item={element}/>
        })

        return <div>{taskArr}</div>;
    }
}

export default List;