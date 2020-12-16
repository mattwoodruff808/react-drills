import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            passInput: ''
        }
    }

    userHandleChange(e){
        this.setState({userInput: e.target.value})
    }

    passHandleChange(e){
        this.setState({passInput: e.target.value})
    }

    alertSubmission(){
        alert(`Username: ${this.state.userInput}  Password: ${this.state.passInput}`)
    }

    render(){
        return (
            <div>
                <input onChange={(e) => this.userHandleChange(e)}/>
                <input onChange={(e) => this.passHandleChange(e)}/>
                <button onClick={() => this.alertSubmission()}>SUBMIT</button>
            </div>
        )
    }
}

export default Login;