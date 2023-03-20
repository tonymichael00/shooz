import React from 'react';
import NavBar from '../NavBar';
import './Landing.scss';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <div id="landing">
      <NavBar />
      <div id="shooz-bkd-wrapper">
        <motion.div
          id="side-shooz-bkd"
          initial={{ left: 0, width: 0 }}
          animate={{ width: '100%' }}
          transition={{ type: 'spring', stiffness: 130, damping: 16 }}
          // exit={{ x: '0' }}
        ></motion.div>
        <motion.div
          id="shooz-bkd"
          initial={{ x: '-100vw', opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 130, damping: 16 }}
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
      <div id="title-caption-wrapper">
        <div id="title-caption-side-bkd"></div>
        <div id="title-caption-bkd">
          <p>
            I can help <span className="blue-txt hover-blue">solve </span>your
            web problems.
          </p>
          <p>
            Don't hesitate to
            <span className="blue-txt hover-blue"> contact me.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
