import './App.scss';
import React from 'react';
import AboutExp from './Components/AboutExp';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Landing from './Components/Landing';

function App() {
  return (
    <div id="content">
      <Landing />
      <AboutExp />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
