import React from 'react';

import Contributor from '../components/Contributor'

import kunalImg from './img/contributors/kunal.jpg'
import haranishImg from './img/contributors/haranish.jpg'
import maneetImg from './img/contributors/maneet.jpg'
import shreyaImg from './img/contributors/shreya.jpg'
import vineetImg from './img/contributors/vineet.jpg'
import chinmayImg from './img/contributors/chinmay.jpg'

const ContributorsList = () => {
  return (
    <section className="bg-gray-245 py-16 mt-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-wrap flex-row justify-center">
          <Contributor
            name="Kunal Malhotra"
            img={kunalImg}
            link="https://www.instagram.com/the.photography.blogger/"/>
          <Contributor
            name="Maneet Sikka"
            img={maneetImg}
            link="https://www.instagram.com/maneet_16/"/>
          <Contributor
            name="Haranish Mehta"
            img={haranishImg}
            link="https://www.instagram.com/haranish.hrf/"/>
          <Contributor
            name="Shreya Bond"
            img={shreyaImg}
            link="https://www.instagram.com/shreyabond/"/>
          <Contributor
            name="Chinmay Sankhe"
            img={chinmayImg}
            link="https://www.instagram.com/_miraclelens/"/>
          <Contributor
            name="Vineet Sharma"
            img={vineetImg}
            link="https://www.instagram.com/vineetsharma527/"/>

          <div className="mx-4">
            <a className="flex flex-col items-center" href="" target="__blank">
              <div className="h-20 w-20 rounded-full bg-black flex justify-center items-center">
                <svg width="25" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#FFF" fill="none" fillRule="evenodd" strokeLinecap="square">
                    <path d="M12.5 1.379v21.242M23.629 12.5H1.371"/>
                  </g>
                </svg>
              </div>
              <span className="mt-2 text-center text-lg">more</span>
            </a>
          </div>
        </div>
        <a
            href="https://play.google.com/store/apps/details?id=com.go.social.prod&referrer=utm_source%3Dgetgosocial.app%26utm_medium%3Dbutton_cta%26utm_term%3Dget%252Bit%252Bon%252Bplaystore%26utm_campaign%3Dlanding_page"
            className="inline-block text-white shadow sm:shadow-none mt-10 flex-grow bg-primary py-3 px-6 rounded cursor-pointer"
            target="__new">
            <span>Become Contributor</span>
          </a>
      </div>
    </section>
  );
};

export default ContributorsList;