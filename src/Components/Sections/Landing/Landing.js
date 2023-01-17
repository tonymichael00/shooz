import React from 'react';
import NavBar from '../NavBar';
import './Landing.css';

const Landing = () => {
  return (
    <div id="landing">
      <NavBar />
      <div id="title-sec">
        <div id="title-bubble">
          <div className="shooz-bkd"></div>
          <div id="title-txt" className="center-flex">
            <span className="shooz-txt yellow-txt">shooz</span>
          </div>
        </div>
        <div id="title-caption-bubble">
          <div className="caption-bkd"></div>
          <div id="caption-txt">
            Hi! I'm <span className="yellow-txt">Mike Schuster.</span> I can
            help solve your web problems. Don't hesitate to
            <span className="yellow-txt"> contact me.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
