import React from 'react';

import rewardImg from '../../Home/sections/img/reward-img.png';
import audianceImg from './img/audiance.png';
import empowerImg from './img/empower.jpg';
import {Link} from 'gatsby';

const Feature = () => {
  return (
    <section>
      <div
        className="max-w-5xl mx-auto mt-12 sm:mt-40 px-6 sm:px-10 lg:px-20 xl:px-0">
        {/* Empower */}
        <div
          className="flex flex-col-reverse md:flex-row justify-center items-center mt-24 sm:mt-32 xl:ml-24">
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="font-black text-4xl lg:text-4xl italic leading-tight">Empower Budding Creators with Ideas</h2>
            <p className="sm:text-xl text-xl lg:text-xl leading-tight mt-4">
              Host your photography, writing, art, or design challenge on GoSocial. And see
              new creators adapt your style and learn as they create.
            </p>
            <div className="inline-block mt-8 text-primary border-b-2 uppercase">
              <Link to="/tags/challenge/">100+ Creative Challenges</Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img className="md:w-9/12 lg:w-4/5 xl:w-auto mx-auto" src={empowerImg} alt=""/>
          </div>
        </div>

        {/* Reward Section */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-24">
          <div className="md:w-1/2">
            <img className="md:w-9/12 lg:w-4/5 xl:w-auto mx-auto" src={rewardImg} alt=""/>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="font-black text-4xl lg:text-4xl italic leading-tight">Reward And Be Rewarded</h2>
            <p className="sm:text-xl text-xl lg:text-xl leading-tight mt-4">
              Host a giveaway, run a contest, or sell your stuff. Creative challenges are new
              and ever evolving. Work alongside our team and plan your own unique challenges.
            </p>
          </div>
        </div>

         {/* Audience */}
         <div
          className="flex flex-col-reverse md:flex-row justify-center items-center mt-24 sm:mt-32 xl:ml-24">
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="font-black text-4xl lg:text-4xl italic leading-tight">Connect with new audience</h2>
            <p className="sm:text-xl text-xl lg:text-xl leading-tight mt-4">
            Your new way to engage with the community and your audience. Create exciting challenges and let them surprise you, do collaborations and much more!
            </p>
            <div className="inline-block mt-8 uppercase">
              <span>13k+ Participants</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <img className="md:w-9/12 lg:w-4/5 xl:w-auto mx-auto" src={audianceImg} alt=""/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Feature;
