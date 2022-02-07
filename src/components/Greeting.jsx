import React, { Component } from "react";
import GreetingUser from "./GreetingUser";
import GuestUser from "./GuestUser";

class Greeting extends Component {
  render() {
    const { send } = this.props;
    // function Showing() {
    //  return (send)? <GreetingUser/>:<GuestUser/>
    // }

    return send ? <GreetingUser /> : <GuestUser />;
  }
}

export default Greeting;
