import React from 'react';
import NavBar from '../NavBar';
import './Landing.css';

const Landing = () => {
  return (
    <div id="landing">
      <NavBar />
      <div id="title-sec">
        <div id="title-shape">
          <div id="side-shooz-bkd"></div>
          <div id="shooz-bkd" className="center-flex">
            <span id="shooz-txt" className="yellow-txt center-flex">
              <p>shooz</p>
            </span>
          </div>
        </div>
        <div id="title-caption-shape">
          <div id="title-caption-side-bkd"></div>
          <div id="title-caption-bkd" className="center-flex">
            <p>
              Hi! I'm <span className="yellow-txt"> Mike Schuster.</span> I can
              help solve your web problems. Don't hesitate to
              <span className="yellow-txt"> contact me.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
