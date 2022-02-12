import React, { Component } from 'react';

export default class App extends Component {
  state = {date:new Date()}
  componentDidMount(){
  this.clearTime =   setInterval(()=>{
      this.setState({date:new Date()})
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.clearTime)
  }
 
  render() {
    const {date}= this.state;
    return <div>
          <h1 style={{textAlign:"center"}}> {date.toLocaleTimeString()}
            
          </h1>
    </div>;
  }
}
