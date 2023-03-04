import React, { useContext } from 'react';
import './Navbar.css';

import Context from '../Context';
import { Link } from 'react-scroll';

import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

const Navbar = () => {

  const {active, setActive} = useContext(Context);

  //Active & InActive Styles For NavBar
  let activeStyle = {
    color: '#253E8F',
  };
  let notActiveStyle = {
    color: 'grey',
  };

  //Scroll Shadow Function for NavBar
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.nav-bar-parent');
    if (this.scrollY >= 30) header?.classList?.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  const navHandler = (id) => {
    document.getElementById('close').click();
    setActive(id);
  }

  return (
    <div className="nav-bar-parent">
      <div className="nav-bar">
        <div className="nav-logo">
        <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={active === 'home' ? activeStyle : notActiveStyle}
              onClick={() => setActive("home")}
            >
          <img
            src="https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/Signature.png"
            className="sivateja-logo"
            alt="Siva Teja"
            title="Siva Teja"
          />
          </Link>
        </div>
        <input
          type="checkbox"
          id="checkbox_toggle"
          className="hamburger hamb2"
        />
              
        <label htmlFor="checkbox_toggle" className="hamburger">
          <RxHamburgerMenu style={{ fontSize: '1.5em' }} />
        </label>
        <label htmlFor="checkbox_toggle" className="cross" id="close">
          <RxCross1 style={{ fontSize: '1.5em' }} />
        </label>
        <ul className="nav-list">
          <li
            className="nav-items"
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={active === 'home' ? activeStyle : notActiveStyle}
              onClick={() => navHandler("home")}
            >
                HOME
            </Link>
          </li>
          
          <li
            className="nav-items"
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={active === 'about' ? activeStyle : notActiveStyle}
              onClick={() => navHandler("about")}
            >
              ABOUT
            </Link>
          </li>
          <li
            className="nav-items"
          >
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={active === 'skills' ? activeStyle : notActiveStyle}
              onClick={() => navHandler("skills")}
            >
              SKILLS
            </Link>
          </li>
          <li
            className="nav-items"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={active === 'projects' ? activeStyle : notActiveStyle}
              onClick={() => navHandler("projects")}
            >
              PROJECTS
            </Link>
          </li>
          <li
            className="nav-items"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={active === 'contact' ? activeStyle : notActiveStyle}
              onClick={() => navHandler("contact")}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
