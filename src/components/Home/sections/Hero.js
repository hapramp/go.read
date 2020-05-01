import React from 'react';
import bgImage from './img/hero_bg.jpg'

const Hero = () => {
  return (
    <section className="hero bg-black">
      <div
        className="p-68 bg-cover bg-center"
        style={{
        backgroundImage: `url(${bgImage})`
      }}></div>
      <div className="max-w-5xl mx-auto text-white pb-10">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="-mt-72">
            <h1
              className="font-black text-4xl sm:text-4xl md:text-5xl italic leading-tight">Work on creative ideas designed by experts</h1>

            <div className="mt-16 text-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.go.social.prod&referrer=utm_source%3Dgetgosocial.app%26utm_medium%3Dbutton%26utm_term%3Dget%252Bit%252Bon%252Bplaystore%26utm_campaign%3Dlanding_page"
                className="text-white shadow sm:shadow-none mt-4 md:mt-0 flex-grow bg-primary py-4 px-6 rounded cursor-pointer"
                target="__new">
                <svg
                  className="inline mr-2"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd">
                  <path
                    fill="#fff"
                    d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941a1.563 1.563 0 01-1.532-.011l-.192-.13zm9.469-11.56L1 22.115V2.093l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zM1.46.433A1.563 1.563 0 013.295.195L15.948 7.21l-3.846 3.835L1.46.433z"/>
                </svg>
                <span>Install Now</span>
              </a>
            </div>
            <div className="mt-20">
              <svg
                className="mx-auto"
                width="42"
                height="42"
                xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(1 1)" fill="none" fill-rule="evenodd">
                  <circle stroke="#FFF" cx="20" cy="20" r="20"/>
                  <path
                    fill="#FFF"
                    fill-rule="nonzero"
                    d="M12.707 15.293l-1.414 1.414L20 25.414l8.707-8.707-1.414-1.414L20 22.586z"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;