// TODO:
import { motion } from 'framer-motion';
import React from 'react';
import GithubLogo from '../../Images/GithubLogo';
import LinkedInLogo from '../../Images/LinkedInLogo';
import './Contact.scss';

const Contact = ({ contMotion }) => {
  //ANIMATIONS
  //CONT IS NECESSARY FOR ANIMATIONS THAT COME OFF SCREEN
  const { contSideMove, itemSideMoveLeft, itemSideMoveRight, viewportAni } =
    contMotion;
  const { headView, blurbView } = viewportAni;

  return (
    <div id="contact-sec">
      {/* YELLOW HEADING  */}
      <motion.div
        className="contact-head-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={headView}
      >
        <div id="contact-sec-link"></div>
        <motion.div
          className="head head-right contact-head"
          variants={itemSideMoveRight}
        >
          Get in touch
        </motion.div>
      </motion.div>
      {/* TEXT BOX */}
      <motion.div
        className="contact-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={blurbView}
      >
        <motion.div
          className="blurb contact-bkd"
          variants={itemSideMoveLeft}
        >
          <p>
            Feel free to contact me with your job. I’m always open to new work
            opportunities.
          </p>
          <div className="project-links">
            <p>getshooz@gmail.com</p>
            <p>219-928-6120</p>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/tonymichael00"
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
              href="https://www.linkedin.com/in/michael-schuster-25817b64/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInLogo
                fill={'#13fafc'}
                height={'1.25.rem'}
                width={'1.25rem'}
              />
            </a>
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1oHHNpUI-g-H1eaPRs6WQVsKTDm8Ju5fU"
              className={'project-links-button'}
            >
              Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
