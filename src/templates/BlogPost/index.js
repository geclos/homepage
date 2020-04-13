import Footer from 'src/components/Footer'
import Layout from "src/components/Layout"
import PropTypes from 'prop-types'
import React from "react"
import SEO from "src/components/seo"
import { Link, graphql } from "gatsby"

import styles from './index.module.scss'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
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

      {(previous || next) && (
        <nav className={styles.nav}>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      )}

      <Footer />
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
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
