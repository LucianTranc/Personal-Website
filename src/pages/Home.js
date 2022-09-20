import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import {useRef} from 'react';

function Home() {

  const projectsRef = useRef(null);

  return (
    <>
      <Hero/>
      <Projects projectsRef={projectsRef}/>
      <Experience />
      <Footer />
    </>
  );
}

export default Home;
