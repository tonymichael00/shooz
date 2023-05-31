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
  const { itemSideMoveLeft, itemSideMoveRight, viewportAni } = contMotion;
  const { headView, blurbView } = viewportAni;

  return (
    <div id="projects-sec">
      <motion.div
        id="projects-head-cont"
        initial="hidden"
        whileInView="visible"
        viewport={headView}
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
        className="project-cont project-cont-pic-right"
        // variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={blurbView}
      >
        <motion.div
          className="mobile-project-bkd"
          variants={itemSideMoveRight}
        ></motion.div>
        <motion.div
          className="blurb project-blurb-bkd project-blurb-bkd-left"
          variants={itemSideMoveRight}
        >
          <motion.div className="blurb project-blurb-bkd project-blurb-bkd-left project-blurb-bkd-color"></motion.div>
          <motion.div
            className="project-blurb-txt project-blurb-txt-left"
            // variants={itemSideMoveRight}
          >
            <div className="upper-project-txt">
              <h2>Pepper</h2>
              <ol>
                <li>
                  My onboarding binder that was chosen by our printing company
                  for a design contest.
                </li>
                <li>Onboarding section</li>
                {/* <li>Onboarding section 4</li> */}
                <li>Belief poster for our Texas branch</li>
                <li>
                  Safety poster we hung on jobsites. All logos are original.
                </li>
              </ol>
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
        // variants={itemSideMoveRight}
        initial="hidden"
        whileInView="visible"
        viewport={blurbView}
      >
        <motion.div
          className="mobile-project-bkd"
          variants={itemSideMoveLeft}
        ></motion.div>
        <motion.div
          className="blurb project-blurb-bkd project-blurb-bkd-right"
          variants={itemSideMoveLeft}
        >
          <div className="project-blurb-txt project-blurb-txt-right">
            <div className="upper-project-txt">
              <h2>
                <a
                  href="https://tonymichael00.github.io/sanguine/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sanguine
                </a>
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
                <a
                  href="https://github.com/tonymichael00/sanguine/tree/main"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubLogo
                    fill={'#13fafc'}
                    height={'1.25.rem'}
                    width={'1.25rem'}
                  />
                </a>
                <a
                  href="https://tonymichael00.github.io/sanguine/"
                  target="_blank"
                  rel="noreferrer"
                >
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
          <img
            src={sanguine}
            alt="Logo2"
            className="project-img"
          />
        </motion.div>
      </motion.div>
      <div></div>
      <motion.div
        className="project-cont project-cont-pic-right"
        // variants={itemSideMoveLeft}
        initial="hidden"
        whileInView="visible"
        viewport={blurbView}
      >
        <motion.div
          className="mobile-project-bkd"
          variants={itemSideMoveRight}
        ></motion.div>
        <motion.div
          className="blurb project-blurb-bkd project-blurb-bkd-left"
          variants={itemSideMoveRight}
        >
          <div
            className="project-blurb-txt project-blurb-txt-left"
            variants={itemSideMoveRight}
          >
            <div className="upper-project-txt">
              <h2>
                <a
                  href="https://tonymichael00.github.io/coloring-pad/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Coloring Pad
                </a>
              </h2>
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
                  <li>Responsive</li>
                </ul>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/tonymichael00/coloring-pad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubLogo
                    fill={'#13fafc'}
                    height={'1.25.rem'}
                    width={'1.25rem'}
                  />
                </a>
                <a
                  href="https://tonymichael00.github.io/coloring-pad/"
                  target="_blank"
                  rel="noreferrer"
                >
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
          <img
            src={coloringPad}
            alt="Logo2"
            className="project-img"
          />
        </motion.div>
      </motion.div>
      <div></div>
    </div>
  );
};

export default Projects;
