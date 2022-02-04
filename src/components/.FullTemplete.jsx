import React, { Component } from 'react';
import About from './About';
import Endbar from './Endbar';
import Lander from './Lander';
import Projects from './Projects';
import Skills from './Skills';

import './styles/FullTemplate.css'

class FullTemplete extends Component {
    render() {
        return (
            <div className="rootTemplate">
               <div className="container-fluid">
               <Lander/>
               <About></About>
               <Skills></Skills>
               <Projects></Projects>
               <Endbar></Endbar>
               </div>
            </div>
        );
    }
}

export default FullTemplete;