import Footer from '../components/Footer'
import Layout from "../components/Layout"
import Posts from '../components/Posts'
import PropTypes from 'prop-types'
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Index = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="Gerard Clos - Personal Page" />
      <Posts posts={data.allMarkdownRemark.edges} />
      <Footer />
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export default Index

// TODO: hmmm... I have no idea how graphQL querying works. Gonna have to investigate...
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { ne: "/bio/" }}},
      limit: 4,
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
