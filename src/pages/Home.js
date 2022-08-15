import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import FadeInSection from '../components/FadeInSection';


function Home() {

  return (
    <>
      <Hero/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
