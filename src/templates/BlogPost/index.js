import Bio from 'src/components/Bio'
import Header from 'src/components/Header'
import Layout from "src/components/Layout"
import Post from 'src/components/Post'
import PropTypes from 'prop-types'
import React from "react"
import SEO from "src/components/seo"
import Separator from 'src/components/Separator'
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Header home />
      <Post post={post} />
      <Separator />
      <Bio />
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
