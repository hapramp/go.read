import React from 'react';

const Asteria = () => {
  return (
    <section className="mt-24 sm:mt-32 md:mt-40 px-6 sm:px-10 lg:px-20 xl:px-0">
      <div className="max-w-5xl flex flex-col md:flex-row mx-auto">
        <h2 className="text-5xl md:text-6xl pr-4 leading-tight">
          Powered by Asteria Protocol
        </h2>
        <div className="flex flex-col items-baseline pr-4">
          <p className="text-xl mt-4">Asteria is a new standard to treat and store data with encryption that makes
            privacy and security accessible to all.
          </p>
          <a rel="nofollow" className="uppercase text-xl border-b-2 border-primary mt-10" href="https://hapramp.com" target="__new">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Asteria;