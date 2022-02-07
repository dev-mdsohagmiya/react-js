import React, { Component } from 'react';
import GreetingUser from './GreetingUser';

class LogutBtn extends Component {
    render() {
        return (
            <div>
                <h1><button onClick = {this.props.onClick}>Logout</button></h1>
                <GreetingUser/>
            </div>
        );
    }
}

export default LogutBtn;
