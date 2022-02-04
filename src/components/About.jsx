import React, { Component } from "react";
import "./styles/about.css";
import { Facebook, Twitter, Linkedin, Github } from "react-bootstrap-icons";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="row  about">
          <div className=" col-lg-1 col-12"></div>
          <div className=" col-lg-4 col-8">
            <img
              style={{ backgroundColor: "#111827" }}
              className="img-thumbnail"
              src={require('../img/shohag.jpg')}
              alt=""
            />
          </div>

          <div className="col-1"></div>
          <div className="col-lg-6 col-12">
            <span
             
              className="title"
            >
              SHOHAG ISLAM SAJJAD
            </span>
            <hr style={{backgroundColor:"#365314"}}/>
            <div className="dec" style={{ color: "#6B7280" }}>
              HI There,I am Shohag Islam Sajjad, form Rangpur Bangladesh . I am
              a front end developer and i am a learner. "Life means learning
              something new"
            </div>
            <div className="contract-info mt-2">
              <span style={{ color: "white" }}>
                <b>E-mail:</b>&nbsp;
                <span className="link">learnwithmsbhh@gmail.com</span>
              </span>{" "}
              <br />
              <span style={{ color: "white" }}>
                <b>Phone:</b>&nbsp;<span className="link">+8801724686857</span>
              </span>
            </div>
            <div className="icons">
              <ul>
                <li>
                <a href="facebook.com">  <Facebook /></a>
                </li>
                <li>
                  <a href="twitter.com"><Twitter /></a>
                </li>
                <li>
                  <a href="linkedin.com"><Linkedin /></a>
                </li>
                <li>
                 <a href="github.com"> <Github /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
