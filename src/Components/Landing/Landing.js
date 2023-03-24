import React from 'react';
import NavBar from '../NavBar';
import './Landing.scss';
import { motion } from 'framer-motion';
// import { sideTransition } from '../../Framer/globalVariants.js';

// TODO: maybe add blue glow to title shapes
// use varaints in app.js to propogate to children

const Landing = () => {
  const sideTransition = {
    // type: 'spring',
    // stiffness: 200,
    // damping: 16,
  };

  return (
    <div id="landing">
      <NavBar />
      <div id="shooz-bkd-wrapper">
        <motion.div
          id="side-shooz-bkd"
          initial={{ left: 0, width: 0 }}
          animate={{ width: '100%' }}
          // transition={sideTransition}
        ></motion.div>
        <motion.div
          id="shooz-bkd"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          // transition={sideTransition}
        >
          <p className="center-flex">
            <span className="yellow-txt center-flex">shooz</span>
          </p>
          <p className="center-flex">
            <span className="shooz-subtitle white-txt">with </span>
            &nbsp;
            <span className="shooz-subtitle yellow-txt hover-blue">
              Mike Schuster
            </span>
          </p>
        </motion.div>
      </div>
      <motion.div id="title-caption-wrapper">
        <motion.div
          id="title-caption-side-bkd"
          initial={{ right: 0, width: 0 }}
          animate={{ width: '100%' }}
          transition={sideTransition}
        ></motion.div>
        <motion.div
          id="title-caption-bkd"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={sideTransition}
        >
          <p>I can help solve your web problems.</p>
          <p>Don't hesitate to contact me.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;
