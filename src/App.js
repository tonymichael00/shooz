// TODO:
import './App.scss';
import React from 'react';
import AboutExp from './Components/AboutExp';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Landing from './Components/Landing';

function App() {
  //variants
  //DO NOT DELETE CONTAINERS OF ELEMENTS WITH ANIMATIONS
  //ANIMATIONS USE FRAMER MOTION
  const itemSideMoveLeft = {
    hidden: {
      x: '-100vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 0.2 },
    },
  };
  const itemSideMoveRight = {
    hidden: {
      opacity: 0,
      x: '100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'tween', duration: 0.2 },
    },
  };
  const viewportAni = {
    headView: { once: true, amount: 1 },
    blurbView: { once: true, amount: 0.1 },
  };

  return (
    <div id="content">
      <Landing
        contMotion={{
          itemSideMoveLeft,
          itemSideMoveRight,
          viewportAni,
        }}
      />
      <AboutExp
        contMotion={{
          itemSideMoveLeft,
          itemSideMoveRight,
          viewportAni,
        }}
      />
      <Projects
        contMotion={{
          itemSideMoveLeft,
          itemSideMoveRight,
          viewportAni,
        }}
      />
      <Contact
        contMotion={{
          itemSideMoveLeft,
          itemSideMoveRight,
          viewportAni,
        }}
      />
    </div>
  );
}

export default App;
