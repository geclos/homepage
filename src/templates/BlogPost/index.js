import Footer from 'src/components/Footer'
import Layout from "src/components/Layout"
import PropTypes from 'prop-types'
import React from "react"
import SEO from "src/components/seo"
import { Link, graphql } from "gatsby"

import styles from './index.module.scss'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className={styles.article}>
        <div className={styles.pre}>
          <Link to='/'>
            Home
          </Link>
        </div>
        <header>
          <h1 className={styles.title}>
            {post.frontmatter.title}
          </h1>
          <p className={styles.date}>
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <Footer />
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
