import React from 'react';
import blobImg from './img/about-blob.png';
import dots from './img/dots.png';

const About = () => {
  return (
    <section 
    style={{backgroundImage:`url(${blobImg})`}}
    className="bg-black py-16 sm:py-24 md:py-32 text-white relative px-6 sm:px-10 lg:px-20 xl:px-0 bg-right-bottom bg-no-repeat">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-black text-4xl md:text-5xl italic">1Ramp is For Creators</h2>
        <div className="max-w-9/2xl text-xl sm:text-2xl md:text-3xl leading-tight">
          <p className="mt-8 sm:mt-12 md:mt-16">Writers, photographers, visual artists, poets… We can list all of them, but
            you got the point, right?
          </p>
          <p className="mt-6">Creators put more than <span className="font-black">$100 Billion</span> worth of content on the Internet every
            year. And we know a way to give this value back to them.</p>
        </div>
        <img className="absolute about-dots" src={dots} alt="Dots Decos"/>
      </div>
    </section>
  );
};

export default About;