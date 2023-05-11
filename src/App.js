// TODO: SLOW TRANSTION SPEED
// First, figure out text for project blurbs
// figure out where to place links: github, linkedIn, resume, shooz email
//make projects a minimum height that looks good

import './App.scss';
import React from 'react';
import AboutExp from './Components/AboutExp';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Landing from './Components/Landing';

function App() {
  //variants
  const contSideMove = {
    hidden: {
      x: 0,
    },
    visible: {
      x: 0,
      transition: { type: 'tween', duration: 0.4 },
    },
    // viewed: { once: true, amount: 1 },
  };

  const itemSideMoveLeft = {
    hidden: {
      x: '-100vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 0.4 },
    },
    // viewed: { once: true, amount: 1 },
  };

  const itemSideMoveRight = {
    hidden: {
      opacity: 0,

      x: '100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'tween', duration: 0.4 },
    },
    // viewed: { once: true, amount: 1 },
  };

  const viewportAni = {
    headView: { once: true, amount: 1 },
    blurbView: { once: true, amount: 0.5 },
  };

  return (
    <div id="content">
      <Landing />
      <AboutExp
        contMotion={{
          itemSideMoveLeft,
          itemSideMoveRight,
          contSideMove,
          viewportAni,
        }}
      />
      <Projects
        contMotion={{
          itemSideMoveLeft,
          itemSideMoveRight,
          contSideMove,
          viewportAni,
        }}
      />
      <Contact
        contMotion={{
          itemSideMoveLeft,
          itemSideMoveRight,
          contSideMove,
          viewportAni,
        }}
      />
    </div>
  );
}

export default App;
