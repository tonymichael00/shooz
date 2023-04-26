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

  //triggers opening and closing navigation menu
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
        // when: 'beforeChildren',
        staggerChildren: 0.2,
        type: 'tween',
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
      transition: {
        type: 'tween',
      },
    },
  };

  return (
    <header>
      <motion.nav id="nav-bar">
        <motion.a
          href=""
          className="logo center-flex"
          initial={{ y: '-200%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'tween' }}
        >
          <img src={logo} alt="Logo" className="center-flex" />
        </motion.a>
        {/* div to create space in grid */}

        <motion.div id="ham-menu" initial={{ y: '-200%' }} animate={{ y: 0 }}>
          <HamMenu setClickMenu={setClickMenu} clickMenu={clickMenu} />
        </motion.div>
        {/* DONT REMOVE NAV-LINKS-CONT OR NAV-LINKS FROM CLASSNAME */}
        <motion.div
          className={`nav-links-cont ${navLinksContToggle}`}
          variants={contVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            className={`nav-links ${navLinksToggle}`}
            href="#about-head-link"
            variants={linkVariants}
          >
            About
          </motion.a>
          <motion.a
            className={`nav-links ${navLinksToggle}`}
            href="#where-head-link"
            variants={linkVariants}
          >
            Experience
          </motion.a>
          <motion.a
            className={`nav-links ${navLinksToggle}`}
            href="#projects-sec-link"
            variants={linkVariants}
          >
            Projects
          </motion.a>
          <motion.a
            className={`nav-links ${navLinksToggle}`}
            href="#contact-sec-link"
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
