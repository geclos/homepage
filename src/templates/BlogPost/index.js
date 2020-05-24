import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Layout from "src/components/Layout"
import PropTypes from 'prop-types'
import React from "react"
import SEO from "src/components/seo"
import { graphql } from "gatsby"

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

      <Header home />

      <article className={styles.article}>
        <header>
          <h1 className={styles.title}>
            {post.frontmatter.title}
          </h1>
          <p className={styles.date}>
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />

        <footer>
          <hr />
          Like what you've read? Subscribe to this blog <a href='/rss.xml'>via RSS</a> or follow
          me on <a href='https://twitter.com/geclos'>Twitter</a> for more similar content.
        </footer>
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
