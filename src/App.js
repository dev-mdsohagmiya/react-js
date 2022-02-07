import React, { Component } from "react";
import LoginBtn from "./components/LoginBtn";
import LogutBtn from "./components/LogutBtn";
// import Greeting from "./components/Greeting";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleClickLogin = this.handleClickLogin.bind(this)
    this.handleClickLogout = this.handleClickLogout.bind(this)
    this.state = { condi: true };
  }
   handleClickLogin(){
     this.setState({condi:true})
     
   }
   handleClickLogout(){
    this.setState({condi:false})

     console.log("Logout")
   }

  render() {
    const { condi } = this.state;
    const showBtn = condi?<LogutBtn onClick = {this.handleClickLogout}/>:<LoginBtn onClick = {this.handleClickLogin}/>
     

    return <div>
             {showBtn}
    </div>;
  }
}
