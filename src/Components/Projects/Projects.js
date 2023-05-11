// TODO: MOVE PICTURE OVER?

import { motion } from 'framer-motion';
import React from 'react';
import Carousel from './Carousel/Carousel';
import './Projects.scss';
import sanguine from './Images/sanguine.webp';
import coloringPad from './Images/coloringPad.webp';
import GithubLogo from '../../Images/GithubLogo';
import ExtLinkLogo from '../../Images/ExtLinkLogo';

const Projects = ({ contMotion }) => {
  const { contSideMove, itemSideMoveLeft, itemSideMoveRight, viewportAni } =
    contMotion;
  const { headView, blurbView } = viewportAni;

  return (
    <div id="projects-sec">
      <motion.div
        id="projects-head-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={headView}
      >
        <div id="projects-sec-link"></div>
        <motion.div
          id="about-head"
          className="head head-left"
          variants={itemSideMoveLeft}
          // viewport="viewed"
        >
          What I've Done
        </motion.div>
      </motion.div>
      <motion.div
        className="project-cont project-cont-pic-right"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={blurbView}
      >
        <motion.div
          className="blurb project-blurb-bkd project-blurb-bkd-left"
          variants={itemSideMoveLeft}
        >
          <motion.div
            className="project-blurb-txt project-blurb-txt-left"
            variants={itemSideMoveLeft}
          >
            <div className="upper-project-txt">
              <h2>Pepper</h2>
              <p>
                Here are a few of my projects I worked on at Pepper. The white
                onboarding binder was chosen by our printer for a design
                contest.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="pic-cont pic-cont-right"
          variants={itemSideMoveRight}
        >
          <Carousel />
        </motion.div>
      </motion.div>
      <div></div>
      <motion.div
        className="project-cont project-cont-pic-left"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={blurbView}
      >
        <motion.div
          className="blurb project-blurb-bkd project-blurb-bkd-right"
          variants={itemSideMoveRight}
        >
          <div
            className="project-blurb-txt project-blurb-txt-right"
            // variants={itemSideMoveRight}
          >
            <div className="upper-project-txt">
              <h2>
                <a href="">Sanguine</a>
              </h2>
              <p>
                Coded in React, this site will help you find your preferred
                weather in the upcoming week and color code it based on how much
                it matches your preferred temperature.
              </p>
            </div>
            <div className="lower-project-txt">
              <div className="project-skills">
                <ul>
                  <li>React</li>
                  <li>Api</li>
                  <li>Responsive</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="">
                  <GithubLogo
                    fill={'#13fafc'}
                    height={'1.25.rem'}
                    width={'1.25rem'}
                  />
                </a>
                <a href="">
                  <ExtLinkLogo
                    fill={'#13fafc'}
                    height={'1.25.rem'}
                    width={'1.25rem'}
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="pic-cont pic-cont-left"
          variants={itemSideMoveLeft}
        >
          <img src={sanguine} alt="Logo2" className="project-img" />
        </motion.div>
      </motion.div>
      <div></div>
      <motion.div
        className="project-cont project-cont-pic-right"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={blurbView}
      >
        <motion.div
          className="blurb project-blurb-bkd project-blurb-bkd-left"
          variants={itemSideMoveLeft}
        >
          <div
            className="project-blurb-txt project-blurb-txt-left"
            variants={itemSideMoveLeft}
          >
            <div className="upper-project-txt">
              <h2>Coloring Pad</h2>
              <p>
                Coding challenge from the Odin Project. In Vanilla Javascript I
                created an area where hovering the mouse will change a square a
                random color. Subsequent hovers will darken it by 10%. You can
                also change the number of squares up to 100x100.
              </p>
            </div>
            <div className="lower-project-txt">
              <div className="project-skills">
                <ul>
                  <li>Vanilla Javascript</li>
                  <li>Api</li>
                  <li>Responsive</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="">
                  <GithubLogo
                    fill={'#13fafc'}
                    height={'1.25.rem'}
                    width={'1.25rem'}
                  />
                </a>
                <a href="">
                  <ExtLinkLogo
                    fill={'#13fafc'}
                    height={'1.25.rem'}
                    width={'1.25rem'}
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="pic-cont pic-cont-right"
          variants={itemSideMoveRight}
        >
          <img src={coloringPad} alt="Logo2" className="project-img" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
