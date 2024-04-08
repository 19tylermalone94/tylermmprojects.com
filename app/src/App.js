import React, { useState } from 'react';
import './App.css';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import TerminalComponent from './components/TerminalComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="App">
      
      <Header />

      <TerminalComponent 
        setShowProjects={setShowProjects} 
        setShowContact={setShowContact}
        setShowAbout={setShowAbout}
      />

      {/* Wrap each section with CSSTransition for animation */}
      <CSSTransition in={showProjects} timeout={300} classNames="section" unmountOnExit>
        <Projects />
      </CSSTransition>
      
      <CSSTransition in={showContact} timeout={300} classNames="section" unmountOnExit>
        <Contact />
      </CSSTransition>
      
      <CSSTransition in={showAbout} timeout={300} classNames="section" unmountOnExit>
        <About />
      </CSSTransition>
      
      <Footer />

    </div>
  );
}

export default App;
