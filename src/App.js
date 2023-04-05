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
      // viewport: { once: true, amount: 0.5 },
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
      transition: { type: 'tween' },
    },
  };

  return (
    <div id="content">
      <Landing />
      <AboutExp
        contMotion={{ itemSideMoveLeft, itemSideMoveRight, contSideMove }}
      />
      <Projects
        contMotion={{ itemSideMoveLeft, itemSideMoveRight, contSideMove }}
      />
      <Contact
        contMotion={{ itemSideMoveLeft, itemSideMoveRight, contSideMove }}
      />
    </div>
  );
}

export default App;
