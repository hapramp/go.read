import React from 'react'
import { kebabCase, orderBy } from 'lodash'
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
        <div className="max-w-4xl mr-auto ml-auto mt-12 mb-12 sm:mt-16 sm:mb-16 md:mt-20 md:mb-20">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black sm:font-black italic text-center">All Tags</h1>
          <ul className="flex flex-wrap mt-5 sm:mt-8 md:mt-10 justify-center">
            {orderBy(group,["totalCount"],['desc']).map(tag => (
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
