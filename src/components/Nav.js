import React, { useState, useEffect } from 'react';
import logomarca from '../images/logo.png';
import avatar from '../images/avatar.png';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', transitionNavbar);
    return () => {
      document.removeEventListener('scroll', transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={logomarca} alt="logomarca" />
        <img className="nav__avatar" src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Nav;
