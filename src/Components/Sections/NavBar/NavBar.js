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
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="2.6rem"
              width="3rem"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg> */}
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
