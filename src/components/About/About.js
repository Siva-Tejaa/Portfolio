import React from 'react';
import './About.css';

import { FiAward } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

import Timeline from "./Timeline";

const About = () => {
  return (
    <div id="about">
      <div className="about-heading">
      <h1 className="about-title">About Me</h1>
        <span className="about-subtitle">Me & My Journey</span>
      </div>
      <div className="about-me">
          <div className="about-exp">
            <FiAward style={{ fontSize: '1.5rem' }} />
            <br />
            <span className="about-text-main">Experience</span>
            <p className="about-text">1.10+ Years Working</p>
           
           </div>
           <div className="about-work">
            <MdWorkOutline style={{ fontSize: '1.5rem' }} />
            <br />
            <span className="about-text-main">Completed</span>
            <p className="about-text">10+ Projects</p>
           
           </div>
           <div className="about-online">
            <BiSupport style={{ fontSize: '1.5rem' }} />
            <br />
            <span className="about-text-main">Support</span>
            <p className="about-text">Online 24/7</p>
           
           </div>
      </div>
      <Timeline/>
    </div>
  );
};
export default About;
