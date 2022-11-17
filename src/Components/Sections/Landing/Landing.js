import React from 'react';
import './Landing.css';
import NavBar from './NavBar/NavBar';

const Landing = () => {
  return (
    <div id="landing">
      <NavBar />
      <div id="title">
        <span className="shooz-txt yellow-txt">shooz</span>
        <br /> with <span className="yellow-txt">Mike Schuster</span>
      </div>
      <div id="title-caption">
        I can help solve your web problems.
        <br /> Don't hesitate to
        <span className="yellow-txt"> contact me.</span>
      </div>
    </div>
  );
};

export default Landing;
