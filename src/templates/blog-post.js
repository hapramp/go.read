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
            <div className="px-4 lg:px-0">
              <h1 className="mt-3 sm:mt-6 text-3xl sm:text-4xl font-bold italic text-black leading-tight">{title}</h1>
              <p className="mt-3 sm:mt-6 text-lg md:text-xl">{description}</p>
              <PostContent className="mt-6 markdown-body" content={content} />
              <div className="flex flex-col sm:flex-row items-start sm:items-center mt-6 sm:mt-10 mb-10 sm:mb-16 md:mb-20">
                <p className="text-base mr-4">Published on {date}</p>
                <span className="hidden sm:inline">|</span>
              {tags && tags.length ? (
                  <div className="flex flex-wrap mt-1 sm:mt-0 sm:ml-4">
                    {tags.map(tag => (
                      <span className="mr-2 uppercase text-base text-gray-70" key={tag + `tag`}>
                        <Link className="text-secondary" to={`/tags/${kebabCase(tag)}/`}>#{tag}</Link>
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
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
  const { markdownRemark: post } = data;

  const description = post.frontmatter.description;
  const title = post.frontmatter.title;
  const image = post.frontmatter.featuredimage?'https://getgosocial.app'+post.frontmatter.featuredimage.childImageSharp.fluid.src:post.frontmatter.bannerimage;

  console.log("Image", image);

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage?post.frontmatter.featuredimage:post.frontmatter.bannerimage}
        date={post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s | GoSocial Blog">
            <title>{`${title}`}</title>
            <meta
              name="description"
              content={`${description}`}
            />
            <meta name="image" content={image} />

            <meta itemprop="name" content={title} />
            <meta itemprop="description" content={description} />
            <meta itemprop="image" content={image} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content="https://getgosocial.app/blog" />
            <meta property="og:site_name" content="GoSocial Blog" />
            <meta property="og:type" content="website" />

            <meta property="twitter:card" content="summary_large_image" /> 
            <meta property="twitter:site" content="GoSocial Blog" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

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
        bannerimage
        featuredimage { childImageSharp { fluid(maxWidth: 1600, quality: 100) { ...GatsbyImageSharpFluid } } }
      }
    }
  }
`
