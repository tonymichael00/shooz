import './App.css';
import React from 'react';
import AboutMe from './Components/Sections/AboutMe';
import WhatIveDone from './Components/Sections/WhatIveDone';
import Contact from './Components/Sections/Contact';
import Landing from './Components/Sections/Landing/Landing';
import NavBar from './Components/Sections/NavBar';

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
