import React, { Component } from 'react';
import './styles/lander.css'
import {ArrowDownCircle} from "react-bootstrap-icons";


export default class Lander extends Component {
  render() {
    return <div>
        <div className="lander">
            
               <div  className="hello">
                <div className="sub-hello">
                <h1>Hello There...</h1> 
                </div>
               </div>
                <div className="arrow">
                <h1 className=""><ArrowDownCircle/></h1>
                </div>
           
        </div>
    </div>;
  }
}
