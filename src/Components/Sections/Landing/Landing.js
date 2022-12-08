import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <div id="landing">
      <div id="title-wrapper">
        <div id="title">
          <div className="black-bkd left"></div>
          <span className="shooz-txt yellow-txt">shooz</span>
          <br />{' '}
          <span className="small-title-txt">
            {' '}
            with <span className="yellow-txt">Mike Schuster</span>
          </span>
        </div>
        {/* </div> */}
      </div>
      <div id="caption-wrapper">
        <div id="caption">
          <div className="black-bkd right"></div>
          <div id="caption-txt">
            I can help solve your web problems.
            <br /> Don't hesitate to
            <span className="yellow-txt"> contact me.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
