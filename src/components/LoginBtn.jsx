import React, { Component } from 'react';
import GuestUser from './GuestUser';

class LoginBtn extends Component {
    render() {
        return (
            <div>
                <h1><button onClick = {this.props.onClick}>Login</button></h1> 
                <GuestUser/>
            </div>
        );
    }
}

export default LoginBtn;