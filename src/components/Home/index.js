import React from 'react';
import Hero from './sections/Hero';
import Feature from './sections/Feature';
import Feature2 from './sections/Feature2';
import CTA from './sections/CTA';
import Footer from './sections/Footer'

const index = () => {
  return (
    <div className="antialiased">
      <div className="bg-black">
        <Hero/>
        <Feature/>
      </div>
      <Feature2/>
      <CTA/>
      <Footer/>
    </div>
  );
};

export default index;