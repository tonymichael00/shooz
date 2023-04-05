import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './AboutExp.scss';

const AboutMe = ({ contMotion }) => {
  const { contSideMove, itemSideMoveLeft, itemSideMoveRight } = contMotion;
  const [workType, setWorkType] = useState('pepper');

  const pepperWork = (
    <>
      <h3>Assistant Marketing Coordinator</h3>
      <p>
        Assistant Marketing Coordinator Developed posters, advertisements,
        pamphlets, and proposals for one of the largest construction contractors
        in Chicago Nominated by a printing vendor for a year-end award
      </p>
    </>
  );

  const freelanceWork = (
    <>
      <h3>Owner</h3>
      <p>I own this website boooooooooooooooooooooooooooooy.</p>
    </>
  );

  // const contSideMove = {
  //   hidden: {
  //     x: 0,
  //   },
  //   visible: {
  //     x: 0,
  //     transition: { type: 'tween' },
  //   },
  // };

  // const itemSideMoveLeft = {
  //   hidden: {
  //     x: '-100vw',
  //     opacity: 0,
  //   },
  //   visible: {
  //     x: 0,
  //     opacity: 1,
  //     transition: { type: 'tween' },
  //     // viewport: { once: true, amount: 0.5 },
  //   },
  // };

  // const itemSideMoveRight = {
  //   hidden: {
  //     opacity: 0,

  //     x: '100vw',
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { type: 'tween' },
  //   },
  // };

  return (
    <motion.div id="about-sec">
      <motion.div
        id="about-head-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.75 }}
      >
        <div id="about-head-link"></div>
        <motion.div
          id="about-head"
          className="head head-left"
          variants={itemSideMoveLeft}
        >
          About me
        </motion.div>
      </motion.div>
      <motion.div
        id="about-body-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div
          id="about-body"
          className="blurb"
          variants={itemSideMoveRight}
        >
          <p>
            I’ve worked in graphic design at one of the largest construction
            companies in Chicago and have been freelancing ever since. I just
            updated my skillset by teaching myself front end web development. I
            built two projects: Color Sketchpad and Sanguine, an ideal weather
            forecast. They were built using Vanilla Javascript and ReactJS
            respectively.
          </p>
          <h3>
            <p>Technical Skills</p>
          </h3>
          <ul>
            <li>Vanilla Javascript</li>
            <li>React</li>
            <li>Node</li>
            <li>Sass</li>
            <li>Framer Motion</li>
          </ul>
        </motion.div>
      </motion.div>
      <motion.div
        id="where-head-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
      >
        <div id="where-head-link"></div>
        <motion.div
          id="where-head"
          className="head head-right"
          variants={itemSideMoveRight}
        >
          Where I've worked
        </motion.div>
      </motion.div>
      <motion.div
        id="where-body-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div
          id="where-body"
          className="blurb"
          variants={itemSideMoveLeft}
        >
          <div className="heading-links">
            <button onClick={() => setWorkType('pepper')}>
              <h2>Pepper</h2>
            </button>
            <div></div>
            <button onClick={() => setWorkType('freelance')}>
              <h2>Freelance</h2>
            </button>
          </div>
          <div className="blurb-txt">
            {workType === 'pepper' ? pepperWork : freelanceWork}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
