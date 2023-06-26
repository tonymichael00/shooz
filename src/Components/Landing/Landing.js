// TODO:
import React from 'react';
import NavBar from '../NavBar';
import './Landing.scss';
import { motion } from 'framer-motion';

const Landing = ({ contMotion }) => {
  //ANIMATION
  const { itemSideMoveLeft, itemSideMoveRight } = contMotion;

  return (
    <motion.div
      id="landing"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <NavBar />
      {/* TITLE BAR */}
      <motion.div
        id="shooz-bkd-wrapper"
        variants={itemSideMoveLeft}
      >
        <div id="side-shooz-bkd"></div>
        <div id="shooz-bkd">
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
        </div>
      </motion.div>
      {/* SUBTITLE BAR */}
      <motion.div
        id="title-caption-wrapper"
        variants={itemSideMoveRight}
      >
        <div id="title-caption-side-bkd"></div>
        <div id="title-caption-bkd">
          <p>I can help solve your web problems.</p>
          <p>Don't hesitate to contact me.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
