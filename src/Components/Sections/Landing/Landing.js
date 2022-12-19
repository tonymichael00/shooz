import React from 'react';
import NavBar from '../NavBar';
import './Landing.css';

const Landing = () => {
  return (
    <div id="landing">
      <NavBar />
      <div id="title-page">
        <div id="title-wrapper">
          {/* <div id="title"> */}
          {/* <div className="black-bkd left"></div> */}
          <div className="shooz-bkd"></div>
          <span className="shooz-txt yellow-txt">shooz</span>
          {/* </div> */}
        </div>
        <div id="caption-wrapper">
          <div id="caption">
            <div className="black-bkd right"></div>
            <div id="caption-txt">
              Hi! I'm <span className="yellow-txt">Mike Schuster.</span> I can
              help solve your web problems. Don't hesitate to
              <span className="yellow-txt"> contact me.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
