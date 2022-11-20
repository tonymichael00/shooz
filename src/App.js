import './App.css';
import AboutMe from './Components/Sections/AboutMe';
import Landing from './Components/Sections/Landing';
import WhatIveDone from './Components/Sections/WhatIveDone';
import Contact from './Components/Sections/Contact';
import React from 'react';
import NavBar from './Components/Sections/NavBar';

function App() {
  return (
    <div id="content">
      <NavBar />
      <Landing />
      <AboutMe />
      <WhatIveDone />
      <Contact />
    </div>
  );
}

export default App;
