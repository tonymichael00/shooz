import React from 'react';
import './AboutExp.scss';

const AboutMe = () => {
  return (
    <div id="about-sec">
      <div id="about-head-cont">
        <div id="about-head-bkd" className="head-bkd">
          <div id="about-head" className="head left center-flex">
            About me
          </div>
        </div>
      </div>
      <div id="about-body" className="body">
        I’ve worked in graphic design at one of the largest construction
        companies in Chicago and have been freelancing ever since. I just
        updated my skillset by teaching myself front end web development. I
        built two projects: Color Sketchpad and Sanguine, an ideal weather
        forecast. They were built using Vanilla Javascript and ReactJS
        respectively. Technical Skills Vanilla Javascript React Node Wordpress
      </div>
      <div id="where-head" className="head right">
        Where I've worked
      </div>
      <div id="where-body" className="body">
        Assistant Marketing Coordinator Developed posters, advertisements,
        pamphlets, and proposals for one of the largest construction contractors
        in Chicago Nominated by a printing vendor for a year-end award
      </div>
    </div>
  );
};

export default AboutMe;
