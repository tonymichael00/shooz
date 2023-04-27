import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './AboutExp.scss';

const AboutMe = ({ contMotion }) => {
  const { contSideMove, itemSideMoveLeft, itemSideMoveRight, viewportAni } =
    contMotion;
  const { headView, blurbView } = viewportAni;
  const [workType, setWorkType] = useState('pepper');

  const pepperWork = (
    <>
      <h2>Assistant Marketing Coordinator</h2>
      <p>
        Assistant Marketing Coordinator Developed posters, advertisements,
        pamphlets, and proposals for one of the largest construction contractors
        in Chicago Nominated by a printing vendor for a year-end award
      </p>
    </>
  );

  const freelanceWork = (
    <>
      <h2>Owner</h2>
      <p>I own this website boooooooooooooooooooooooooooooy.</p>
    </>
  );

  return (
    <motion.div id="about-sec">
      <motion.div
        id="about-head-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={headView}
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
        viewport={blurbView}
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
          <h2>
            <p>Technical Skills</p>
          </h2>
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
        viewport={headView}
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
        viewport={blurbView}
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
          <div>{workType === 'pepper' ? pepperWork : freelanceWork}</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
