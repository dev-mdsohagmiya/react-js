import React, { Component } from 'react';
import './styles/projects.css'
import {CodeSlash,Eye } from "react-bootstrap-icons";


export default class Projects extends Component {
  render() {
    return <div>
         <div className="projects">
         <hr style={{backgroundColor:"#365314"}} />
        <div className="skills-title">
            PROJECTS
        </div>
        <div className="row">
            <div className=" col-md-6 col-12"><div className="sub-1">
                <div className="sub-11">
                <img src={require('../img/adjaye.png')} alt="..." class="img-thumbnail"/>
                  <span className="p-title">Adjaye</span>
                  <span className="p-sub-title">Full Responsive</span>
                  <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li> <br />
                    <li className="li-page">35+Pages</li>
                  </ul>
                    <div className="row p-btn">
                      <div className="col-6 btn-code text-center">
                        <a href="https://github.com/msbhh-ms/adjaye"><div className="projects-btn">
                      <span >Code <CodeSlash/></span></div>
                      </a>
                      </div>
                      
                      <div className="col-6 btn-live text-center">
                        <a href="https://adjaye.netlify.app/"><div className="projects-btn">
                      <span >Live <Eye/></span></div></a>
                      </div>
                    </div>
                </div>
                </div></div>
                <div className=" col-md-6 col-12"><div className="sub-1">
                <div className="sub-11">
                <img src={require('../img/1space.png')} alt="..." class="img-thumbnail"/>
                  <span className="p-title">1-Space</span>
                  <span className="p-sub-title">Not Responsive</span>
                  <ul>
                    <li>Html</li>
                    <li>Css</li>
                     <br />
                    <li className="li-page">Landing Page</li>
                  </ul>
                    <div className="row p-btn">
                      <div className="col-6 btn-code text-center">
                        <a href="https://github.com/msbhh-ms/1_space_landing_page_3"><div className="projects-btn">
                      <span >Code <CodeSlash/></span></div>
                      </a>
                      </div>
                      
                      <div className="col-6 btn-live text-center">
                        <a href="https://1-space-ms.netlify.app/"><div className="projects-btn">
                      <span >Live <Eye/></span></div></a>
                      </div>
                    </div>
                </div>
                </div></div>
                <div className=" col-md-6 col-12"><div className="sub-1">
                <div className="sub-11">
                <img src={require('../img/promodoro.png')} alt="..." class="img-thumbnail"/>
                  <span className="p-title">Promodoro</span>
                  <span className="p-sub-title">Full Responsive</span>
                  <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li> <br />
                    <li className="li-page">1Page</li>
                  </ul>
                    <div className="row p-btn">
                      <div className="col-6 btn-code text-center">
                        <a href="https://github.com/msbhh-ms/promodoro"><div className="projects-btn">
                      <span >Code <CodeSlash/></span></div>
                      </a>
                      </div>
                      
                      <div className="col-6 btn-live text-center">
                        <a href="https://promodoro-app-msbhh.netlify.app/"><div className="projects-btn">
                      <span >Live <Eye/></span></div></a>
                      </div>
                    </div>
                </div>
                </div></div>
                <div className=" col-md-6 col-12"><div className="sub-1">
                <div className="sub-11">
                <img src={require('../img/simpleportfolio.png')} alt="..." class="img-thumbnail"/>
                  <span className="p-title">Simple Portfolio</span>
                  <span className="p-sub-title">Full Responsive</span>
                  <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li> <br />
                    <li className="li-page">1Page</li>
                  </ul>
                    <div className="row p-btn">
                      <div className="col-6 btn-code text-center">
                        <a href="https://github.com/msbhh-ms/pt-1"><div className="projects-btn">
                      <span >Code <CodeSlash/></span></div>
                      </a>
                      </div>
                      
                      <div className="col-6 btn-live text-center">
                        <a href="https://nostalgic-mccarthy-e6ef87.netlify.app/"><div className="projects-btn">
                      <span >Live <Eye/></span></div></a>
                      </div>
                    </div>
                </div>
                </div></div>
          
        </div>
         </div>

    </div>;
  }
}
