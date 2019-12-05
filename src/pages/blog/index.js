import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import contestIcon from '../../img/contest.svg';
import challengesIcon from '../../img/challenges.svg';
import blogIcon from '../../img/blog.svg';
import announcementIcon from '../../img/announcement.svg';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="bg-center bg-no-repeat bg-secondary bg-cover"
          style={{
            backgroundImage: `url('/img/home-jumbotron.jpg')`,
          }}
        >
          <div className="max-w-4xl mx-auto text-white text-center py-10 sm:py-20">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold sm:font-black italic text-white"> Keep Reading, Keep Going!</h1>
            <h5 className="mt-2 text-base sm:text-base md:text-lg px-2 leading-tight">Discover everything GoSocial: Challenges, contests, updates, and inspiration.</h5>
          </div>
        </div>
        <section>
          <div className="container mr-auto ml-auto">
            <div className="sm:mt-10">
              <div className="flex h-20 sm:hidden bg-gray-245 py-4 text-gray-70 w-screen overflow-y-hidden">
                <div className="flex h-24 overflow-x-auto">
                  <Link className="font-black italic md:text-lg lg:text-xl flex flex-shrink-0 items-center mx-2 bg-white px-4 py-2 rounded h-12 ml-4" to="/tags/contest/">
                    <img className="mr-2" src={contestIcon} alt="" />
                    Contest
                  </Link>
                  <Link className="font-black italic md:text-lg lg:text-xl flex flex-shrink-0 items-center mx-2 bg-white px-4 py-2 rounded h-12" to="/tags/challenges/">
                    <img className="mr-2" src={challengesIcon} alt="" />
                    Challenges
                  </Link>
                  <Link className="font-black italic md:text-lg lg:text-xl flex flex-shrink-0 items-center mx-2 bg-white px-4 py-2 rounded h-12" to="/tags/general/">
                    <img className="mr-2" src={blogIcon} alt="" />
                    General
                  </Link>
                  <Link className="font-black italic md:text-lg lg:text-xl flex flex-shrink-0 items-center mx-2 bg-white px-4 py-2 rounded h-12" to="/tags/announcement">
                    <img className="mr-2" src={announcementIcon} alt="" />
                    Announcement
                  </Link>
                  <div className="p-1"></div>
                </div>
                
              </div>
              <h3 className="mt-5 sm:mt-0 text-base sm:text-2xl uppercase text-primary font-bold pl-4 pr-4">Latest</h3>
              <div className="mt-5 sm:mt-10"><BlogRoll /></div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
