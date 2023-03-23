import './App.scss';
import React from 'react';
import AboutMe from './Components/AboutMe';
import WhatIveDone from './Components/WhatIveDone';
import Contact from './Components/Contact';
import Landing from './Components/Landing';

function App() {
  return (
    <div id="content">
      <Landing />
      <AboutMe />
      <WhatIveDone />
      <Contact />
    </div>
  );
}

export default App;
