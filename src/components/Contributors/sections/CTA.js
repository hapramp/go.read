import React from 'react';

import ctaBlob from '../../Home/sections/img/cta-blob.png';
import dots from '../../Home/sections/img/dots.png';

const CTA = () => {
  return (
    <section className={`form mt-24 sm:mt-32 mb-24 sm:mb-32 lg:px-6 xl:px-0`}>
      <div
        style={{
        backgroundImage: `url(${ctaBlob})`
      }}
        className="px-4 max-w-7xl sm:px-10 bg-black text-white lg:mx-auto pt-16 sm:pt-32 pb-16 sm:pb-20 sm:py-32 lg:rounded-lg lg:shadow-2xl text-center relative bg-left-bottom bg-no-repeat">
        <h2 className="font-black text-3xl md:text-5xl italic">Host your first challenge on GoSocial</h2>
        <p className="text-xl md:text-2xl mt-4">#CreateOnTheGo</p>
        <div className="mt-10 sm:mt-16">
          <a
            rel="nofollow"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf4n1x4gRNjB4jz2XVxV6GMyoltMCbu6ccIOR0uY3rO8yH3mA/viewform?usp=sf_link"
            className="text-white shadow sm:shadow-none mt-4 md:mt-0 flex-grow bg-primary py-4 px-6 rounded cursor-pointer"
            target="__new">
            <span>Become Contributor</span>
          </a>
        </div>
        <img className="absolute cta-dots hidden sm:block" src={dots} alt="Dots Decos"/>
      </div>
    </section>
  );
};

export default CTA;