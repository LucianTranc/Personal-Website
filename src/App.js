import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Experience from './components/Experience';
import {useRef} from 'react';

function App() {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  return (
    <div className="App">
      <Router>
        <Navbar projectsRef={projectsRef} aboutRef={aboutRef} experienceRef={experienceRef}/>
        <Hero aboutRef={aboutRef}/>
        <Projects projectsRef={projectsRef}/>
        <Experience experienceRef={experienceRef}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
