import React, { Component } from 'react';
import './styles/skills.css'

export default class Skills extends Component {
  render() {
    return <div className="skills ">
        <hr style={{backgroundColor:"#365314"}} />
        <div className="skills-title">
            SKILLS
        </div>
        <div className="row py-4">
            <div className="col-md-6 col-12">
                <div className="div1">
                    <div className="row">
                        <div className="col-6">
                            <div className="sub-col1">
                                <span>Front End</span>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="sub-col2">
                            <ul>
                                <li>Html</li>
                                <li>Css</li>
                                <li>Sass</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            <div  className="col-md-6 col-12 sm-margin">
            <div className="div1">
            <div className="row">
                        <div className="col-6">
                            <div className="sub-col1">
                                <span>Others</span>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="sub-col2">
                            <ul>
                                <li>Linux</li>
                                <li>BashScript</li>
                                <li>Git</li>
                                <li>Github</li>
                                <li>Dom</li>
                                <li>Styled Components</li>
                            </ul>
                        </div>

                        </div>
                    </div>

            </div>

            </div>
        </div>
    </div>;
  }
}
