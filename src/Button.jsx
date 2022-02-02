import React, { Component } from 'react';

class Button extends Component {
    render() {
        // console.log(this.props.for)
        return (
            <div>
                
                <button onClick= {this.props.for}>Click</button>
            </div>
        );
    }
}

export default Button;