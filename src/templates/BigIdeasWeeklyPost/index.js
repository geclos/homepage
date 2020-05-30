import Header from 'src/components/Header'
import Layout from "src/components/Layout"
import Post from 'src/components/Post'
import PropTypes from 'prop-types'
import React from "react"
import { graphql } from "gatsby"

const BigIdeasWeeklyPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Header home />

      <Post post={post} />
    </Layout>
  )
}

BigIdeasWeeklyPostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export default BigIdeasWeeklyPostTemplate

export const pageQuery = graphql`
  query BigIdeasWeeklyPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
