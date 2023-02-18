// TODO: create class for clicked ham menu. change class when clicked
// onclick remove all formatting classes and change to click
import React from 'react';
import './NavBar.scss';
import logo from './Images/logo.png';
import HamMenu from './HamMenu/HamMenu';
// import hamMenu from './Images/hamMenu.svg';

const NavBar = () => {
  return (
    <header>
      <nav id="nav-bar">
        <a href="_self" className="logo center-flex">
          <img src={logo} alt="Logo" className="center-flex" />
        </a>
        {/* div to create space in grid */}
        <div id="ham-menu">
          <HamMenu />
        </div>
        <div className="nav-links-cont-click">
          <a className="nav-links-click" href="_self">
            About
          </a>
          <a className="nav-links-click" href="#Experience">
            Experience
          </a>
          <a className="nav-links-click" href="#Projects">
            Projects
          </a>
          <a className="nav-links-click" href="#Contact">
            Contact
          </a>
          <a className="nav-links-click" href="_self">
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
