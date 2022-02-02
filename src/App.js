import React, { Component } from 'react';

export default class App extends Component {
  state = {date:new Date(),language:"en-US"}
  componentDidMount(){
  this.clearTime =   setInterval(()=>{
      this.setState({date:new Date()})
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.clearTime)
  }
  languageChange = (value)=>{
       this.setState({language:value})
  }
  render() {
    const {date,language}= this.state;
    // let button ; 
    // if(language==="bn-BD"){
    //   button = (
    //     <button onClick={()=>this.languageChange("en-US")}>Click</button>
    //   )
    // }else{
    //   button = ( <button onClick={()=>this.languageChange("bn-BD")}>Click</button>)
    // }
    return <div>
          <h1 style={{textAlign:"center"}}> {date.toLocaleTimeString(language)}
            
          </h1>
          {
            language==="bn-BD"?(<button onClick={()=>this.languageChange("en-US")}>Click</button>):
            <button onClick={()=>this.languageChange("bn-BD")}>Click</button>
          }
    </div>;
  }
}
