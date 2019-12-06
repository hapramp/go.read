import React from 'react';

import steemImg from './img/steem-img.png';
import steemBlob from './img/steem-blob.png';

const Steem = () => {
  return (
    <section
    style={{backgroundImage:`url(${steemBlob})`}}
     className="mt-24 sm:mt-32 md:mt-40 bg-secondary py-24 sm:py-40 text-white bg-left-top bg-no-repeat px-6 sm:px-10 lg:px-20 xl:px-0">
      <div className="max-w-5xl flex flex-col-reverse md:flex-row mx-auto items-center">
        <div className="mt-12 md:mt-0 md:w-9/12 lg:w-1/2 flex flex-col justify-between pr-4">
          <div className="text-xl">
            <h2 className="text-4xl black italic">1Ramp is also available on Steem Blockchain</h2>
            <p className="mt-8">
              Creators have earned more than $59 Millions on Steem platforms.
            </p>
            <p className="mt-4">
              With the new 1Ramp, we are enabling rewards beyond cryptocurrency.
            </p>
          </div>
          <div className="text-lg mt-6">
            <div>Got a Steem account?
            </div>
            <div>Try 1Ramp-Steem on
              <a className="text-primary border-b-2 border-primary mx-2 whitespace-no-wrap" href="https://play.google.com/store/apps/details?id=com.hapramp&hl=en_IN" target="__new">Play Store</a>
              and
              <a className="text-primary border-b-2 border-primary mx-2 whitespace-no-wrap" href="https://alpha.1ramp.io/feed/explore/" target="__new">Web.</a>
            </div>
          </div>
        </div>
        <div className="md:2/5 lg:w-1/2 text-right">
          <img className="md:w-full lg:w-4/5 lg:w-4/5 xl:w-auto inline-block" src={steemImg} alt="Steem App"/>
        </div>
      </div>
    </section>
  );
};

export default Steem;