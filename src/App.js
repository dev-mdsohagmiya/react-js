import React, { Component } from 'react';
import Button from './Button';

export default class App extends Component {
  state = {change:"red"}

   myFnc = (value)=>{
     this.setState({
       change:value
     })
   }
  
  render() {
  const {change} = this.state
    return <div>

     <Button for={this.myFnc.bind(this,"green")}></Button>
      <div style={{color:change}}>shohag islam sajjad</div>
    </div>;
  }
}
