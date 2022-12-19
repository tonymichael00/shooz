import React from 'react';
import './NavBar.css';
import logo from './images/logo.png';
import hamMenu from './images/hamMenu.svg';

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul id="nav-bar">
          <li className="navi logo">
            <a href="_self">
              <img src={logo} alt="Logo" className="center-flex" />
            </a>
          </li>
          <li className="navi links">
            <a href="_self">
              <span>About</span>
            </a>
          </li>
          <li className="navi links">
            <a href="#Experience">
              <span>Experience</span>
            </a>
          </li>
          <li className="navi links">
            <a href="#Projects">
              <span>Projects</span>
            </a>
          </li>
          <li className="navi links">
            <a href="#Contact">
              <span>Contact</span>
            </a>
          </li>
          <li className="navi links">
            <a href="_self">
              <span>Resume</span>
            </a>
          </li>
          <li className="navi">
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
