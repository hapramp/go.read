import React from 'react';
import bgImage from './img/hero-bg.jpg'

const Hero = () => {
  return (
    <section>
      <div
        className="p-24 bg-cover bg-center"
        style={{
        backgroundImage: `url(${bgImage})`
      }}></div>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center mt-12 md:mt-16">
          <div className="text-center">
            <h1
              className="font-black text-4xl sm:text-4xl md:text-5xl italic leading-tight px-4">Inspire creators with your ideas</h1>
            <p className="max-w-xl mt-4 mx-auto text-xl px-4">Creative ideas can be shared in
              from of challenges on GoSocial. Budding creators take these
              as self-challenges to learn new things.</p>

            <div className="mt-10">
              <div className="flex flex-row items-center justify-center">
                <svg
                  width="20"
                  height="34"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path
                      d="M.893 17.214l16.941-6.613a2.143 2.143 0 000-3.917L.893.071v32.143"
                      id="a"/>
                  </defs>
                  <use
                    stroke="#264BBB"
                    strokeWidth="1.5"
                    fill="#264BBB"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    href="#a"
                    transform="translate(0 1)"
                    fillRule="evenodd"/>
                </svg>
                <p className="text-lg md:text-xl uppercase ml-4">35k Submissions in challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;