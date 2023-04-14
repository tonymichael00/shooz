import { motion } from 'framer-motion';
import React from 'react';
import Carousel from './Carousel/Carousel';
import './Projects.scss';

const Projects = ({ contMotion }) => {
  const { contSideMove, itemSideMoveLeft, itemSideMoveRight } = contMotion;

  return (
    <div id="projects-sec">
      <motion.div
        id="projects-head-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.75 }}
      >
        <div id="projects-sec-link"></div>
        <motion.div
          id="about-head"
          className="head head-left"
          variants={itemSideMoveLeft}
        >
          What I've Done
        </motion.div>
      </motion.div>
      <motion.div
        id="pepper-blurb-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="project-blurb-txt">
          <h3>Pepper</h3>
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
        </div>
        <div
          id="pepper-blurb"
          className="blurb"
          // variants={itemSideMoveRight}
        ></div>
        <div className="carousel-cont">
          <Carousel />
        </div>
      </motion.div>
      What I've done.
    </div>
  );
};

export default Projects;
