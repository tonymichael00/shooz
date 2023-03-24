// TODO: create class for clicked ham menu. change class when clicked
// onclick remove all formatting classes and change to click
import React, { useState } from 'react';
import './NavBar.scss';
import logo from './Images/logo.png';
import HamMenu from './HamMenu/HamMenu';
import { motion } from 'framer-motion';

// TODO: CENTER LINKS
// import hamMenu from './Images/hamMenu.svg';

const NavBar = () => {
  const [clickMenu, setClickMenu] = useState(false);

  let navLinksContToggle = clickMenu
    ? 'nav-links-cont-click'
    : 'nav-links-cont';
  let navLinksToggle = clickMenu ? 'nav-links-click' : 'nav-links';

  const contVariants = {
    hidden: {
      y: '-100%',
    },
    visible: {
      y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const linkVariants = {
    hidden: {
      y: '-100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <header>
      <motion.nav id="nav-bar">
        <motion.a
          href="_self"
          className="logo center-flex"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
        >
          <img src={logo} alt="Logo" className="center-flex" />
        </motion.a>
        {/* div to create space in grid */}
        <motion.div id="ham-menu">
          <HamMenu setClickMenu={setClickMenu} clickMenu={clickMenu} />
        </motion.div>
        <motion.div
          className={`${navLinksContToggle}`}
          variants={contVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            className={`${navLinksToggle}`}
            href="_self"
            variants={linkVariants}
          >
            About
          </motion.a>
          <motion.a
            className={`${navLinksToggle}`}
            href="#Experience"
            variants={linkVariants}
          >
            Experience
          </motion.a>
          <motion.a
            className={`${navLinksToggle}`}
            href="#Projects"
            variants={linkVariants}
          >
            Projects
          </motion.a>
          <motion.a
            className={`${navLinksToggle}`}
            href="#Contact"
            variants={linkVariants}
          >
            Contact
          </motion.a>
        </motion.div>
      </motion.nav>
    </header>
  );
};

export default NavBar;
