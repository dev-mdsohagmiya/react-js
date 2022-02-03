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
                        <a href="face.com"><div className="projects-btn">
                      <span >Code <CodeSlash/></span></div>
                      </a>
                      </div>
                      
                      <div className="col-6 btn-live text-center">
                        <a href="face/com"><div className="projects-btn">
                      <span >Live <Eye/></span></div></a>
                      </div>
                    </div>
                </div>
                </div></div>
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
                        <a href="face.com"><div className="projects-btn">
                      <span >Code <CodeSlash/></span></div>
                      </a>
                      </div>
                      
                      <div className="col-6 btn-live text-center">
                        <a href="face/com"><div className="projects-btn">
                      <span >Live <Eye/></span></div></a>
                      </div>
                    </div>
                </div>
                </div></div>
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
                        <a href="face.com"><div className="projects-btn">
                      <span >Code <CodeSlash/></span></div>
                      </a>
                      </div>
                      
                      <div className="col-6 btn-live text-center">
                        <a href="face/com"><div className="projects-btn">
                      <span >Live <Eye/></span></div></a>
                      </div>
                    </div>
                </div>
                </div></div>
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
                        <a href="face.com"><div className="projects-btn">
                      <span >Code <CodeSlash/></span></div>
                      </a>
                      </div>
                      
                      <div className="col-6 btn-live text-center">
                        <a href="face/com"><div className="projects-btn">
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
