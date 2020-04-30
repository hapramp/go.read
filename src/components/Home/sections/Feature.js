import React from 'react';

import contestImg from './img/contest.png';
import challengeImg from './img/challenges.png';
import leaderboardImg from './img/leaderboard.png';
import {Link} from 'gatsby';

const Feature = () => {
  return (
    <section className="text-white pb-32">
      <div
        className="max-w-5xl mx-auto mt-24 sm:mt-40 px-6 sm:px-10 lg:px-20 xl:px-0">
        {/* Contest Section */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2">
            <img
              className="md:w-9/12 lg:w-4/5 xl:w-auto shadow-2xl mx-auto"
              src={contestImg}
              alt=""/>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="font-black text-4xl lg:text-4xl italic leading-tight">Take
              creative challenges designed by photographers, artists, writers, and designers</h2>
            <p className="sm:text-xl text-xl leading-tight mt-4">
              Challenges are ideas, prompts, or projects.
            </p>
            <div className="inline-block mt-8 text-primary border-b-2 uppercase">
              <Link to="/tags/contest">Host your challenge</Link>
            </div>

          </div>
        </div>

        {/* Challenges */}
        <div
          className="flex flex-col-reverse md:flex-row justify-center items-center mt-24 sm:mt-32 xl:ml-24">
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="font-black text-4xl lg:text-4xl italic leading-tight">Pick your streak in a challenge and keep going!</h2>
            <p className="sm:text-xl text-xl lg:text-xl leading-tight mt-4">
              Choose the number of days you want to take a challenge for. Create and share
              your work every day to maintain the streak and practise.

            </p>
            <div className="inline-block mt-8 text-primary border-b-2 uppercase">
              <Link to="/tags/challenge/">Explore Challenges</Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              className="md:w-9/12 lg:w-4/5 xl:w-auto shadow-2xl mx-auto"
              src={challengeImg}
              alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
