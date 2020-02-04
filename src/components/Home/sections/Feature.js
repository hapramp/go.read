import React from 'react';

import contestImg from './img/contest.png';
import challengeImg from './img/challenges.png';
import leaderboardImg from './img/leaderboard.png';
import { Link } from 'gatsby';

const Feature = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto mt-24 sm:mt-40 px-6 sm:px-10 lg:px-20 xl:px-0">
        {/* Contest Section */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2">
           <img className="md:w-9/12 lg:w-4/5 xl:w-auto shadow-2xl"  src={contestImg} alt=""/>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="font-black text-4xl lg:text-4xl italic">Creative Contests, Exciting Prizes.</h2>
            <p className="sm:text-xl text-2xl lg:text-2xl leading-tight mt-4">
              New photography contests every month, with exciting rewards.
            </p>
            <div className="inline-block mt-8 text-secondary border-b-2 uppercase"><Link to="/tags/contest">Explore Contests</Link></div>

          </div>
        </div>

        {/* Challenges */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-24 sm:mt-32">
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="font-black text-4xl lg:text-4xl italic">New Challenges, Every Week.</h2>
            <p className="sm:text-xl text-xl lg:text-2xl leading-tight mt-4">
            Take your cue from the challenges created by experts and improve your skills. Never run out of inspiration to create!
            
            </p>
            <div className="inline-block mt-8 text-secondary border-b-2 uppercase"><Link to="/tags/challenge/">Explore Challenges</Link></div>
          </div>
          <div className="md:w-1/2 text-right">
           <img className="md:w-9/12 lg:w-4/5 xl:w-auto md:inline-block shadow-2xl" src={challengeImg} alt=""/>
          </div>
        </div>

        {/* Reward Section */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-24 sm:mt-32">
          <div className="md:w-1/2">
           <img className="md:w-9/12 lg:w-4/5 xl:w-auto shadow-2xl"  src={leaderboardImg} alt=""/>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="font-black text-4xl lg:text-4xl italic">Rewards That Keep You Going, Every Week.</h2>
            <p className="sm:text-xl text-2xl lg:text-2xl leading-tight mt-4">
            Cash rewards for top creators, every week. Each Like and finished challenge moves you up on the leaderboard.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Feature;