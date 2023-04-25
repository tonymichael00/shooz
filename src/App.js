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
      transition: { type: 'tween' },
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
      transition: { type: 'tween' },
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
      transition: { type: 'tween' },
    },
    // viewed: { once: true, amount: 1 },
  };

  const viewportAni = {
    headView: { once: true, amount: 1 },
    blurbView: { once: true, amount: 0.1 },
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
