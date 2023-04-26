// TODO: DELETE ALL USELESS ID'S IN PROJECT

import { motion } from 'framer-motion';
import React from 'react';
import './Contact.scss';

const Contact = ({ contMotion }) => {
  const { contSideMove, itemSideMoveLeft, itemSideMoveRight, viewportAni } =
    contMotion;
  const { headView, blurbView } = viewportAni;

  return (
    <div id="contact-sec">
      <motion.div
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
          Feel free to contact me with your job. I’m always open to new work
          opportunities.
        </motion.div>
      </motion.div>
      <div className="contact-page-space"></div>
    </div>
  );
};

export default Contact;
