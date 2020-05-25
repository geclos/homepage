import Box from 'src/components/Box'
import Header from 'src/components/Header'
import Layout from "src/components/Layout"
import React from "react"
import SEO from "src/components/seo"
import { useStaticQuery, graphql } from "gatsby"

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
      <Header home />
      <Box>
        <div dangerouslySetInnerHTML={{ __html: html }}  />
      </Box>
    </Layout>
  )
}

export default About
