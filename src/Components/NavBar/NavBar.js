// TODO: create class for clicked ham menu. change class when clicked
// onclick remove all formatting classes and change to click
import React, { useState } from 'react';
import './NavBar.scss';
import logo from './Images/logo.png';
import HamMenu from './HamMenu/HamMenu';
import { motion } from 'framer-motion';

// import hamMenu from './Images/hamMenu.svg';

const NavBar = () => {
  const [clickMenu, setClickMenu] = useState(false);

  let navLinksContToggle = clickMenu
    ? 'nav-links-cont-click'
    : 'nav-links-cont';
  let navLinksToggle = clickMenu ? 'nav-links-click' : 'nav-links';

  const linkVariants = {
    hidden: {
      y: '-100%',
    },
    visible: {
      y: 0,
      transition: {
        delay: 2,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <header>
      <motion.nav
        id="nav-bar"
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ delay: 2 }}
      >
        <a href="_self" className="logo center-flex">
          <img src={logo} alt="Logo" className="center-flex" />
        </a>
        {/* div to create space in grid */}
        <div id="ham-menu">
          <HamMenu setClickMenu={setClickMenu} clickMenu={clickMenu} />
        </div>
        <div className={`${navLinksContToggle}`}>
          <a className={`${navLinksToggle}`} href="_self">
            About
          </a>
          <a className={`${navLinksToggle}`} href="#Experience">
            Experience
          </a>
          <a className={`${navLinksToggle}`} href="#Projects">
            Projects
          </a>
          <a className={`${navLinksToggle}`} href="#Contact">
            Contact
          </a>
        </div>
      </motion.nav>
    </header>
  );
};

export default NavBar;
