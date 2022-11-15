import './App.css';
import AboutMe from './Components/Sections/AboutMe/AboutMe';
import Landing from './Components/Sections/Landing';
import WhatIveDone from './Components/Sections/WhatIveDone';
import Contact from './Components/Sections/Contact';
import React from 'react';

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
