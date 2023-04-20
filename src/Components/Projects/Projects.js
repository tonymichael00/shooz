import { motion } from 'framer-motion';
import React from 'react';
import Carousel from './Carousel/Carousel';
import './Projects.scss';
import img1Webp from './Images/img1.webp';
import GithubLogo from '../../Images/GithubLogo';

const Projects = ({ contMotion }) => {
  const { contSideMove, itemSideMoveLeft, itemSideMoveRight } = contMotion;

  return (
    <div id="projects-sec">
      <motion.div
        id="projects-head-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
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
        // id="pepper-blurb-cont"
        className="project-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="project-blurb-txt project-blurb-txt-left"
          variants={itemSideMoveLeft}
        >
          <div className="upper-project-txt">
            <h3>Pepper</h3>
            <p>
              I’ve worked in graphic design at one of the largest construction
              companies in Chicago and have been freelancing ever since. I just
              updated my skillset by teaching myself front end web development.
              I built two projects: Color Sketchpad and Sanguine, an ideal
              weather forecast. They were built using Vanilla Javascript and
              ReactJS respectively.
            </p>
          </div>
        </motion.div>
        <motion.div
          // id="pepper-blurb"
          className="blurb project-blurb-bkd project-blurb-bkd-left"
          variants={itemSideMoveLeft}
        ></motion.div>
        <motion.div
          className="pic-cont pic-cont-right"
          variants={itemSideMoveRight}
        >
          <Carousel />
        </motion.div>
      </motion.div>
      <div></div>
      <motion.div
        // id="pepper-blurb-cont"
        className="project-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="project-blurb-txt project-blurb-txt-right"
          variants={itemSideMoveRight}
        >
          <div className="upper-project-txt">
            <h3>Sanguine</h3>
            <p>This is my sanguine app. Gaze upon it's splendor.</p>
          </div>
          <div className="lower-project-txt">
            <div className="project-skills">
              <p>React</p>
              <p>Api</p>
              <p>Responsive</p>
            </div>
            <div className="project-links">
              <a href="">
                <GithubLogo fill={'#f4ff0a'} />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          // id="pepper-blurb"
          className="blurb project-blurb-bkd project-blurb-bkd-right"
          variants={itemSideMoveRight}
        ></motion.div>
        <motion.div
          className="pic-cont pic-cont-left"
          variants={itemSideMoveLeft}
        >
          <img src={img1Webp} alt="Logo2" className="project-img" />
        </motion.div>
      </motion.div>
      <div></div>
      <motion.div
        // id="pepper-blurb-cont"
        className="project-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="project-blurb-txt project-blurb-txt-left"
          variants={itemSideMoveLeft}
        >
          <div className="upper-project-txt">
            <h3>Coloring Pad</h3>
            <p>So great.</p>
          </div>
        </motion.div>
        <motion.div
          // id="pepper-blurb"
          className="blurb project-blurb-bkd project-blurb-bkd-left"
          variants={itemSideMoveLeft}
        ></motion.div>
        <motion.div
          className="pic-cont pic-cont-right"
          variants={itemSideMoveRight}
        >
          <img src={img1Webp} alt="Logo2" className="project-img" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
