import Header from 'src/components/Header'
import Layout from 'src/components/Layout'
import NewsletterPost from 'src/components/NewsletterPost'
import Posts from 'src/components/Posts'
import PropTypes from 'prop-types'
import React from "react"
import { graphql } from "gatsby"

const BigIdeasWeekly = ({ data }) => {
  return (
    <Layout>
      <Header home />
      <Posts posts={data.allMarkdownRemark.edges} Post={NewsletterPost}/>
    </Layout>
  )
}

BigIdeasWeekly.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export default BigIdeasWeekly

export const pageQuery = graphql`
 query bigIdeasWeeklyQuery($limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/big_ideas_weekly/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`
