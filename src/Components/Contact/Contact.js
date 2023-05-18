// TODO: DELETE ALL USELESS ID'S IN PROJECT

import { motion } from 'framer-motion';
import React from 'react';
import EmailLogo from '../../Images/EmailLogo/EmailLogo';
import GithubLogo from '../../Images/GithubLogo';
import LinkedInLogo from '../../Images/LinkedInLogo';
import './Contact.scss';

const Contact = ({ contMotion }) => {
  const { contSideMove, itemSideMoveLeft, itemSideMoveRight, viewportAni } =
    contMotion;
  const { headView, blurbView } = viewportAni;

  return (
    <div id="contact-sec">
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
      <motion.div
        className="contact-cont"
        variants={contSideMove}
        initial="hidden"
        whileInView="visible"
        viewport={blurbView}
      >
        <motion.div className="blurb contact-bkd" variants={itemSideMoveLeft}>
          <p>
            Feel free to contact me with your job. I’m always open to new work
            opportunities.
          </p>
          <div className="project-links">
            <p>shoozmedia@protonmail.com</p>
            <p>219-928-6120</p>
          </div>
          <div className="project-links">
            <GithubLogo
              fill={'#13fafc'}
              height={'1.25.rem'}
              width={'1.25rem'}
            />
            <LinkedInLogo
              fill={'#13fafc'}
              height={'1.25.rem'}
              width={'1.25rem'}
            />
            {/* <EmailLogo fill={'#13fafc'} height={'1.25.rem'} width={'1.25rem'} /> */}
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
