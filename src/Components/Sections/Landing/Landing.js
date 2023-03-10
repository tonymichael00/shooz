import React from 'react';
import NavBar from '../NavBar';
import './Landing.scss';

const Landing = () => {
  return (
    <div id="landing">
      <NavBar />
      <div id="shooz-bkd-wrapper">
        <div id="side-shooz-bkd"></div>
        <div id="shooz-bkd">
          <p className="center-flex">
            <span className="yellow-txt center-flex">shooz</span>
          </p>
          <p className="center-flex">
            <span className="shooz-subtitle white-txt">with </span>
            &nbsp;
            <span className="shooz-subtitle yellow-txt hover-blue">
              {' '}
              Mike Schuster
            </span>
          </p>
        </div>
      </div>
      <div id="title-caption-wrapper">
        <div id="title-caption-side-bkd"></div>
        <div id="title-caption-bkd">
          <p>
            I can help <span className="yellow-txt hover-blue">solve </span>your
            web problems.
          </p>
          <p>
            Don't hesitate to
            <span className="yellow-txt hover-blue"> contact me.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
