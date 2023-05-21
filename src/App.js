import React, { useState } from 'react';
import './style.css';

import Context from './components/Context';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Scrollup from './components/Scrollup/Scrollup';
// import ErrorPage from './components/ErrorPage/ErrorPage';

export default function App() {
  const [active, setActive] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [titleShow, setTitleShow] = useState(true);

  // setInterval(() => {
  //   document.title = titleShow ? "Siva Teja" : "Software Engineer";
  //   setTitleShow(!titleShow);
  // },1000)

  return (
    <>
      <center>
        <Context.Provider
          value={{ active, setActive, isDarkMode, setIsDarkMode }}
        >
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <Scrollup />
        </Context.Provider>
      </center>
    </>
  );
}
