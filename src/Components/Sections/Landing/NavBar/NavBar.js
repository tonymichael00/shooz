import React from 'react';
import './NavBar.css';
import logo from './images/logo.png';

const NavBar = () => {
  return (
    <header>
      <nav id="nav-bar">
        <div id="logo" className="nav-links">
          <a href="_self">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div id="links">
          <ul>
            <li className="nav-links">
              <a href="_self">
                <span>About</span>
              </a>
            </li>
            <li className="nav-links">
              <a href="#Experience">
                <span>Experience</span>
              </a>
            </li>
            <li className="nav-links">
              <a href="#Projects">
                <span>Projects</span>
              </a>
            </li>
            <li className="nav-links">
              <a href="#Contact">
                <span>Contact</span>
              </a>
            </li>
            <li className="nav-links">
              <a href="_self">
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
