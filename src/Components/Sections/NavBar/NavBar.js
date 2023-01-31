import React from 'react';
import './NavBar.css';
import logo from './Images/logo.png';
import hamMenu from './Images/hamMenu.svg';

const NavBar = () => {
  return (
    <header>
      <nav id="nav-bar">
        <a href="_self" className="logo">
          <img src={logo} alt="Logo" className="center-flex" />
        </a>
        {/* div to create space in grid */}
        <div></div>
        <a className="center-flex" href="_self">
          <span>About</span>
        </a>
        <a className="center-flex" href="#Experience">
          <span>Experience</span>
        </a>
        <a className="center-flex" href="#Projects">
          <span>Projects</span>
        </a>
        <a className="center-flex" href="#Contact">
          <span>Contact</span>
        </a>
        <a className="center-flex" href="_self">
          <span>Resume</span>
        </a>
        <img src={hamMenu} alt="Logo" id="hamMenu" className="center-flex" />
      </nav>
    </header>
  );
};

export default NavBar;
