// TODO: put div around nav so it can turn into square with
// hamburger menu

import React from 'react';
import './NavBar.scss';
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
        <div id="nav-links-cont">
          <a className="nav-links center-flex" href="_self">
            About
          </a>
          <a className="nav-links center-flex" href="#Experience">
            Experience
          </a>
          <a className="nav-links center-flex" href="#Projects">
            Projects
          </a>
          <a className="nav-links center-flex" href="#Contact">
            Contact
          </a>
          <a className="nav-links center-flex" href="_self">
            Resume
          </a>
          <a className=" center-flex" href="_self">
            <img
              src={hamMenu}
              alt="Logo"
              id="hamMenu"
              className="center-flex"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
