import React, { useState } from 'react';
import './App.css';
import Projects from './components/Projects';
import Contact from './components/Contact'; // Assuming you have this component
import About from './components/About'; // Assuming you have this component
import TerminalComponent from './components/TerminalComponent';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="App">
      
      <Header />

      {/* Pass setShow* functions to the TerminalComponent */}
      <TerminalComponent 
        setShowProjects={setShowProjects} 
        setShowContact={setShowContact}
        setShowAbout={setShowAbout}
      />

      {/* Conditionally render sections based on their respective states */}
      {showProjects && <Projects />}
      {showContact && <Contact />}
      {showAbout && <About />}
      
      <Footer />

    </div>
  );
}

export default App;
