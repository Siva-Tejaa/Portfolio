import React,{useContext} from 'react';
import './Scrollup.css';

import Context from '../Context';
import { Link } from 'react-scroll';

import { HiOutlineArrowSmUp } from 'react-icons/hi';

const Scrollup = () => {

  const {active, setActive} = useContext(Context);

// Scroll Up Function in Bottom of Page 
  window.addEventListener('scroll', function () {
    const scrollUp = document.querySelector('.scrollup');
    if (this.scrollY >= 300) scrollUp?.classList?.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  });

  return (
        <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setActive("home")}
            >
      <span className="scrollup">
      <HiOutlineArrowSmUp className="icon" style = {{ fontSize: "2.0em", color:"white" }} title="Go to Top"/>
    </span>
    </Link>
  );
};

export default Scrollup;
