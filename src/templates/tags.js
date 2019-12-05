import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { kebabCase } from 'lodash'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} Post${
      totalCount === 1 ? '' : 's'
      } tagged with “${tag}”`

    const image = this.props.data.imageSharp.sizes.src;
    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div
            className="bg-center bg-no-repeat bg-secondary bg-cover"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="max-w-4xl mx-auto text-white text-center py-10 sm:py-20">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black sm:font-black italic text-white leading-tight"> {tagHeader}</h1>
              <Link className="inline-block text-sm px-4 py-2 mt-4 uppercase bg-primary text-white rounded" to="/tags/">Browse all tags</Link>
            </div>
          </div>
          <div className="container ml-auto mr-auto">
            <div className="flex flex-wrap mt-10">
              {posts && posts.map(({ node: post }) => (
                <div className="sm:block w-full sm:w-1/2 xl:w-1/3 pl-4 pr-4 text-gray-70 mb-10 sm:mb-20" key={post.id}>
                  <article
                    className={`flex sm:block ${post.frontmatter.featuredpost
                      ? 'is-featured'
                      : ''}`}>
                    <header className="w-84 mr-4 sm:mr-0 sm:w-full">
                      {post.frontmatter.featuredimage
                        ? (
                          <div className="">
                            <PreviewCompatibleImage
                              imageInfo={{
                                image: post.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${post.frontmatter.title}`
                              }} />
                          </div>
                        )
                        : null}

                    </header>
                    <div className="blog-card-content">
                      <div className="post-meta -mt-1 sm:mt-3">
                        <div className="text-sm text-gray-70">
                          {post.frontmatter.date}
                        </div>

                        <Link className="text-black font-bold italic text-xl sm:text-2xl leading-tight" to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                      </div>
                      <p className="mt-2">
                        {post.excerpt}
                        <Link className="text-primary inline-block" to={post.fields.slug}>
                          Keep Reading →
                </Link>
                        {post.frontmatter.tags && post.frontmatter.tags.length ? (
                          <div className="mt-3 flex flex-wrap">
                            {post.frontmatter.tags.map(tag => (
                              <span className="mr-2 uppercase text-sm text-gray-70" key={tag + `tag`}>
                                <Link to={`/tags/${kebabCase(tag)}/`} className="">#{tag}</Link>
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </p>
                    </div>

                  </article>
                </div>
              ))}
            </div>

          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    imageSharp(id: {eq: "fba31229-9ee6-5f59-85cd-1d034e50caa1"}) {
      sizes(maxWidth: 1440, quality: 100) {
        src
      }
    }
  }
`
