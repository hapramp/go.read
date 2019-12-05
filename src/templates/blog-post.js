import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  date,
  featuredimage
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="">
      {helmet || ''}
      <div className="max-w-3xl ml-auto mr-auto">
        <div className="">
          <div className="">
            {featuredimage
              ? (
                <div className="">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: featuredimage,
                      alt: `featured image thumbnail for post ${title}`
                    }} />
                </div>
              )
              : null}
            <h1 className="mt-6 text-4xl font-bold italic text-black">{title}</h1>
            <p className="mt-6 text-xl">{description}</p>
            <PostContent className="mt-6 markdown-body" content={content} />
            <div className="flex items-center mt-10 mb-20">
              <p className="text-base mr-4">Published on {date}</p>
              |
              {tags && tags.length ? (
                <div className="ml-4">
                  {tags.map(tag => (
                    <span className="mr-2 uppercase text-base text-gray-70"  key={tag + `tag`}>
                      <Link className="text-secondary" to={`/tags/${kebabCase(tag)}/`}>#{tag}</Link>
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
           
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        date={post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage { childImageSharp { fluid(maxWidth: 1200, quality: 100) { ...GatsbyImageSharpFluid } } }
      }
    }
  }
`
