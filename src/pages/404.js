import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout className="h-full">
    <section>
      <div className="max-w-4xl ml-auto mr-auto text-center mt-20 mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black sm:font-black italic text-center text-gray-87">NOT FOUND :(</h1>
        <p className=" text-gray-70 mt-4">This link is broken, looks like a <span className="italic">challenge</span> for us.</p>
        <div className="mt-12 sm:mt-16 md:mt-20 text-lg sm:text-xl ">
          For now, Go back to <Link className="text-secondary uppercase" to="/">Home</Link>
        </div>
      </div>
    </section>

  </Layout>
)

export default NotFoundPage
