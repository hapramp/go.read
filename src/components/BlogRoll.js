import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { kebabCase } from 'lodash'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="flex flex-wrap">
        {posts && posts.map(({ node: post }) => (
          <div className="sm:block w-full sm:w-1/2 xl:w-1/3 pl-4 pr-4 text-gray-70 mb-10 sm:mb-20" key={post.id}>
            <article
              className={`flex sm:block ${post.frontmatter.featuredpost
                ? 'is-featured'
                : ''}`}>
              <header className="w-84 mr-4 sm:mr-0 sm:w-full flex-1">
                <Link to={post.fields.slug}>
                {post.frontmatter.featuredimage || post.frontmatter.thumbimage
                  ? (
                    <div className="blogroll-thumb">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage?post.frontmatter.featuredimage:post.frontmatter.thumbimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`
                        }} />
                    </div>
                  )
                  : null}
                </Link>
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
                  <span className="mr-2">{post.excerpt}</span>
                  <Link className="text-primary inline-block" to={post.fields.slug}>
                    Keep Reading →
                </Link>
                  {post.frontmatter.tags && post.frontmatter.tags.length ? (
                    <span className="mt-3 flex flex-wrap block">
                      {post.frontmatter.tags.map(tag => (
                        <span className="mr-2 uppercase text-sm text-gray-70" key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`} className="">#{tag}</Link>
                        </span>
                      ))}
                    </span>
                  ) : null}
                </p>
              </div>

            </article>
          </div>
        ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({ edges: PropTypes.array })
  })
}

export default () => (
  <StaticQuery
    query={graphql` query BlogRollQuery { allMarkdownRemark( sort: { order: DESC, fields: [frontmatter___date] } filter: { frontmatter: { templateKey: { eq: "blog-post" } } } ) { edges { node { excerpt(pruneLength: 100) id fields { slug } frontmatter { title tags templateKey date(formatString: "MMMM DD, YYYY") featuredpost thumbimage featuredimage { childImageSharp { fluid(maxWidth: 400, quality: 100) { ...GatsbyImageSharpFluid } } } } } } } } `}
    render={(data, count) => <BlogRoll data={data} count={count} />} />
)
