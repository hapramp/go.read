import React from 'react';

import rewardImg from './img/reward-img.png';
import streakImg from './img/streak-img.png';
import {Link} from 'gatsby';

import badge1 from './img/badge/badge-1.png'
import badge2 from './img/badge/badge-2.png'
import badge3 from './img/badge/badge-3.png'
import badge4 from './img/badge/badge-4.png'
import badge5 from './img/badge/badge-5.png'

const Feature = () => {
  return (
    <section>
      <div
        className="max-w-5xl mx-auto mt-24 sm:mt-40 px-6 sm:px-10 lg:px-20 xl:px-0">
        {/* Contest Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="lg:w-1/2">
            <img
              className="md:w-9/12 lg:w-4/5 xl:w-auto mx-auto shadow-2xl "
              src={streakImg}
              alt=""/>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0 text-center md:text-left">
            <h2 className="font-black text-2xl md:text-3xl lg:text-4xl italic leading-tight">Streaks are a fun way to learn</h2>
            <div className="mt-10 text-left">
              {/* Badge 1 */}
              <div className="flex flex-row items-center">
                <img className="h-16 w-16" src={badge1} alt="Badge"/>
                <div className="ml-4">
                  <h5 className="text-base sm:text-lg uppercase font-bold">1 to 5 Days - Trial</h5>
                  <p className="text-base md:text-lg">Trying out that idea</p>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex flex-row items-center mt-6">
                <img className="h-16 w-16" src={badge2} alt="Badge"/>
                <div className="ml-4">
                  <h5 className="text-base sm:text-lg uppercase font-bold">7 to 15 Days - Experiment</h5>
                  <p className="text-base md:text-lg">Experimenting with the idea</p>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex flex-row items-center mt-6">
                <img className="h-16 w-16" src={badge3} alt="Badge"/>
                <div className="ml-4">
                  <h5 className="text-base sm:text-lg uppercase font-bold">30 Day - Learning</h5>
                  <p className="text-base md:text-lg">From 20-hour learning rule (45 mins * 30 days)</p>
                </div>
              </div>

              {/* Badge 4 */}
              <div className="flex flex-row items-center mt-6">
                <img className="h-16 w-16" src={badge4} alt="Badge"/>
                <div className="ml-4">
                  <h5 className="text-base sm:text-lg uppercase font-bold">180 Days - Master</h5>
                  <p className="text-base md:text-lg">Get disciplined and master the art</p>
                </div>
              </div>

              {/* Badge 5 */}
              <div className="flex flex-row items-center mt-6">
                <img className="h-16 w-16" src={badge5} alt="Badge"/>
                <div className="ml-4">
                  <h5 className="text-base sm:text-lg uppercase font-bold">365 Days - Legend</h5>
                  <p className="text-base md:text-lg">Make a ritual to create every day</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Challenges */}
        <div
          className="flex flex-col-reverse md:flex-row justify-center items-center mt-24 sm:mt-32 xl:ml-24">
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="font-black text-2xl md:text-3xl lg:text-4xl italic leading-tight">Rewards That Keep You Going!</h2>
            <p className="text-lg sm:text-xl lg:text-xl leading-tight mt-4">
              Participate in art, writing, design, and photography contests and giveaways and
              win exciting rewards
            </p>
            <div className="inline-block mt-8 text-primary border-b-2 uppercase">
              <Link to="/tags/contest/">Explore Contests</Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img className="md:w-9/12 lg:w-4/5 xl:w-auto mx-auto" src={rewardImg} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
