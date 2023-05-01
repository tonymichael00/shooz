//TODO: CHANGE BULLETS TO BLUE

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
      <ul>
        <li>
          Developed posters, advertisements, pamphlets, and proposals for one of
          the largest construction contractors in Chicago.
        </li>
        <li>Nominated by a printing vendor for a year-end award</li>
        <li>
          Designed company content including company intranet, jobsite posters,
          logos and graphics
        </li>
        <li>Captured photos and videos for social media </li>
        <li>
          Oversaw complete development of multiple onboarding binders including
          custom tabs, cover art, file organization and coordination with
          printing vendor
        </li>
      </ul>
    </>
  );

  const freelanceWork = (
    <>
      <h2>Owner, Shooz Media</h2>
      <ul>
        <li>Design and maintain websites</li>
        <li>Capture photos</li>
        <li>Create personalized website and marketing content</li>
        <li>Received positive reviews that my sites directly increase sales</li>
      </ul>
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
            I'm a freelance web developer who is currently looking for clients
            and job opportunities. I can help your business find the correct
            solution for your website needs.
          </p>
          <h2>
            <p>Technical Skills</p>
          </h2>
          <ul>
            <li>React</li>
            <li>Vanilla Javascript</li>
            <li>Sass</li>
            <li>Node</li>
            <li>Framer Motion</li>
            <li>Git</li>
            <li>Linux</li>
            <li>Design</li>
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
