import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Experience from '../components/Experience';

function Home() {

  return (
    <>
      <Hero/>
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}

export default Home;
