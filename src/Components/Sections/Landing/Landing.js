import React from 'react';
import NavBar from '../NavBar';
import './Landing.css';
import shoozImg from './Images/shooz.svg';
import withMikeImg from './Images/withMike.svg';

const Landing = () => {
  return (
    <div id="landing">
      <NavBar />
      <div id="side-shooz-bkd"></div>
      <div id="shooz-bkd-wrapper">
        <div id="shooz-bkd">
          <img src={shoozImg} alt="Title" className="center-flex" />
          <img src={withMikeImg} alt="Subtitle" className="center-flex" />
        </div>
      </div>
      {/* <div id="title-caption-side-bkd"></div> */}
      <div id="title-caption-bkd" className="center-flex">
        <p>
          Hi! I'm <span className="yellow-txt"> Mike Schuster.</span> I can help
          solve your web problems. Don't hesitate to
          <span className="yellow-txt"> contact me.</span>
        </p>
      </div>
    </div>
  );
};

export default Landing;
