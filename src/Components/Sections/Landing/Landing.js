import React from 'react';
import NavBar from '../NavBar';
import './Landing.css';

const Landing = () => {
  return (
    <div id="landing">
      <NavBar />
      <div id="title-sec">
        <div id="title-bubble">
          <div id="shooz-bkd"></div>
          <div id="title-txt" className="center-flex">
            <span id="shooz-txt" className="yellow-txt center-flex">
              <p>shooz</p>
            </span>
          </div>
        </div>
        <div id="title-caption-bubble">
          <div id="caption-bkd"></div>
          <div id="caption-txt" className="center-flex">
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
