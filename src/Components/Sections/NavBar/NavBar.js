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
        <ul>
          <li className="links">
            <a href="_self">
              <span>About</span>
            </a>
          </li>
          <li className="links">
            <a href="#Experience">
              <span>Experience</span>
            </a>
          </li>
          <li className="links">
            <a href="#Projects">
              <span>Projects</span>
            </a>
          </li>
          <li className="links">
            <a href="#Contact">
              <span>Contact</span>
            </a>
          </li>
          <li className="links">
            <a href="_self">
              <span>Resume</span>
            </a>
          </li>
          <li className="hamMenu">
            <img
              src={hamMenu}
              alt="Logo"
              id="hamMenu"
              className="center-flex"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
