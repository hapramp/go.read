import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/home-jumbotron.jpg')`,
          }}
        >
          <div className="max-w-4xl mx-auto text-white text-center">
            <div className="p-10"></div>
            <h1 className="text-5xl font-black italic text-white"> Keep Reading, Keep Going!</h1>
            <h5 className="text-lg">Discover everything GoSocial: Challenges, contests, updates, and inspiration.</h5>
            <div className="p-10"></div>
          </div>
        </div>
        <section>
          <div className="container mr-auto ml-auto">
            <div className="mt-10">
              <h3 className="text-2xl uppercase text-primary font-bold pl-4 pr-4">Latest</h3>
              <div className="mt-10"><BlogRoll /></div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
