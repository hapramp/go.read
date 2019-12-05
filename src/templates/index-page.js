import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'


import contestIcon from '../img/contest.svg';
import challengesIcon from '../img/challenges.svg';
import blogIcon from '../img/blog.svg';
import announcementIcon from '../img/announcement.svg';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <div>
      <div
        className="bg-center bg-no-repeat bg-secondary bg-cover"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
        }}
      >
        <div className="max-w-4xl mx-auto text-white text-center py-10 sm:py-20">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black sm:font-black italic text-white"> {title}</h1>
          <h5 className="mt-2 text-base sm:text-base md:text-lg px-4 leading-tight">{subheading}</h5>
        </div>
      </div>
      <section className="">
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
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
