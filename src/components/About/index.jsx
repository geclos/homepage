import Layout from "src/components/Layout"
import React from "react"
import SEO from "src/components/seo"
import { useStaticQuery, graphql } from "gatsby"

import styles from './index.module.scss'

const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/misc\/about/" } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query)
  const html = data.allMarkdownRemark.edges[0].node.html

  return (
    <Layout>
      <SEO title="Gerard Clos - About" />
      <div className={styles.root}>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }}  />
      </div>
    </Layout>
  )
}

export default About
