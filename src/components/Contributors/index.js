import React from 'react';
import Hero from './sections/Hero';
import ContributorsList from './sections/ContributorsList'
import Feature from './sections/Feature';
import CTA from './sections/CTA';
import Footer from '../Home/sections/Footer';

const index = () => {
  return (
    <div className="antialiased">
      <Hero/> 
      <ContributorsList/>
      <Feature/>
      <CTA/>
      <Footer/>
    </div>
  );
};

export default index;