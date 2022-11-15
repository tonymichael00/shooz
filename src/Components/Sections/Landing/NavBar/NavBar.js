import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div id="nav-bar">
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#About">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#Experience">
              <span>Experience</span>
            </a>
          </li>
          <li>
            <a href="#Projects">
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#Contact">
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="_self">
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
      NavBar
    </div>
  );
};

export default NavBar;
