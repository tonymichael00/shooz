import { motion } from 'framer-motion';
import React from 'react';
import './AboutExp.scss';

const AboutMe = () => {
  const contSideMove = {
    hidden: {
      x: 0,
    },
    visible: {
      x: 0,
      transition: {},
    },
  };

  const itemSideMoveLeft = {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: 0,
      transition: {},
    },
  };

  const itemSideMoveRight = {
    hidden: {
      x: '100vw',
    },
    visible: {
      x: 0,
      transition: {},
    },
  };

  return (
    <motion.div
      id="about-sec"
      variants={contSideMove}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.75 }}
    >
      <motion.div id="about-head-cont" variants={itemSideMoveLeft}>
        <motion.div
          id="about-head"
          className="head head-left"
          // viewport={{ once: true, amount: 1 }}
        >
          About me
        </motion.div>
      </motion.div>
      <motion.div id="about-body" className="body" variants={itemSideMoveRight}>
        I’ve worked in graphic design at one of the largest construction
        companies in Chicago and have been freelancing ever since. I just
        updated my skillset by teaching myself front end web development. I
        built two projects: Color Sketchpad and Sanguine, an ideal weather
        forecast. They were built using Vanilla Javascript and ReactJS
        respectively. Technical Skills Vanilla Javascript React Node Wordpress
      </motion.div>
      <motion.div
        id="where-head"
        className="head head-right"
        variants={itemSideMoveRight}
      >
        Where I've worked
      </motion.div>
      <motion.div id="where-body" className="body" variants={itemSideMoveLeft}>
        Assistant Marketing Coordinator Developed posters, advertisements,
        pamphlets, and proposals for one of the largest construction contractors
        in Chicago Nominated by a printing vendor for a year-end award
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
