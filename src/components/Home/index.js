import React from 'react';
import Hero from './sections/Hero';
import Feature from './sections/Feature';
import CTA from './sections/CTA';
import Footer from './sections/Footer'

const index = () => {
  return (
    <div className="antialiased">
      <Hero />
      <Feature />
      <CTA />
      <Footer />
    </div>
  );
};

export default index;