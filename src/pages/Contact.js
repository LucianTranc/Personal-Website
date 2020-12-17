import React from 'react';
import '../App.css';
import Hero from '../components/Hero'
import ContactContent from '../components/ContactContent'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <Hero
        isVideo={false}
        backgroundSource='/img/koifish.jpg'
        header='Contact'
        subheader='Feel free to reach out anytime!'
      />
      <ContactContent/>
      <Footer/>
    </>
  );
}

export default Contact;