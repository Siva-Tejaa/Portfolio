import React,{useContext} from 'react';
import './Home.css';

import { Typewriter } from 'react-simple-typewriter';
import {ResumeLink} from "../utils/Data"

import { IoIosSend } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";

import { Link } from 'react-scroll';

import Context from '../Context';

const Home = () => {

  const {active, setActive} = useContext(Context);

  return (
    <div className="home-parent" id="home">
      <div className="home">
        <div className="home-details">
          <h3 className="hello">Hello ! &nbsp; <img src="https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/HiEmoji.gif" width="30px" height="30px" /></h3>
         
          <span className="title-sub">I'm </span> <span className="title">Siva Teja</span>
          <h2 className="front-end">
            <Typewriter
              words={[
                'Front-End Developer',
                'Web Developer',
                'ReactJs Developer',
              ]}
              loop={0}
              cursor
            />
          </h2>
          <h4 className="about">
            I'm a front-end developer specializing in building exceptional
            digital experiences. Currently, I am learning MERN development and
            improving my skills in building responsive full-stack web
            applications.
          </h4>
          <button className="resume-btn" title="Download Resume">
            <a
              href={ResumeLink}
              target="_blank"
              className="home_a"
            >
              Download CV <IoDocumentText className="send-icon"/>
            </a>
          </button>{' '}
          &nbsp; &nbsp;
          
          <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setActive("contact")}
            >
            <button className="resume-btn" title="Hire Me">
            <span className="home_a">
              Hire Me  <IoIosSend className="send-icon"/>
              </span>
            </button>
            </Link>
          
        </div>

        <div className="home-image">
          <img
            src="https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/Portfolio%20Graphic%20Clip%20Art%20Image.png"
            className="home-image-self"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
