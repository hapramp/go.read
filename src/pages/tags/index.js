import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
      <section className="section flex">
        <Helmet title={`Tags | ${title}`} />
        <div className="max-w-4xl mr-auto ml-auto mt-20 mb-20">
          <h1 className="text-5xl font-bold italic text-black text-center">All Tags</h1>
          <ul className="flex flex-wrap mt-10 justify-center">
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link className="text-gray-87 rounded mr-2 ml-2 inline-block bg-gray-245 px-4 py-2 mt-4" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  #{tag.fieldValue} ({tag.totalCount})
                  </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
