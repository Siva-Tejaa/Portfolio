import React from "react";
import "./Footer.css";

import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaLinkedin,FaGithubSquare } from "react-icons/fa";

const Footer = () => {

  const date = new Date();

  return(
    <div>
      <div className="footer">
        <section className=" footer_section">
        <div className="info_social">
            <div>
              <a href="https://www.facebook.com/Sivaa.Teja" target="_blank" title="Facebook">
                <FaFacebookSquare className="foot-icons"/>
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/s.i.v.a_t.e.j.a" target="_blank" title="Instagram">
                <FaInstagramSquare className="foot-icons"/>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/Siva_Tejaa" target="_blank" title="Twitter">
                <FaTwitterSquare className="foot-icons"/>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/siva-tejaa" target="_blank" title="LinkedIn">
                <FaLinkedin className="foot-icons"/>
              </a>
            </div>
            <div>
              <a href="https://github.com/Siva-Tejaa" target="_blank" title="GitHub">
                <FaGithubSquare className="foot-icons"/>
              </a>
            </div>
            </div>
        </section>
        
        <p>
         Copyright &copy; <span id="displayYear">{date.getFullYear()}</span> | <span className="name">All Rights Reserved</span>
        </p>
        <p className="love">Made with ❤️ by Siva Teja</p>
      </div>
    </div>
  )
}
export default Footer;