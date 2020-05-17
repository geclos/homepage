import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Layout from "src/components/Layout"
import Nav from './Nav'
import Posts from 'src/components/Posts'
import PropTypes from 'prop-types'
import React from "react"
import SEO from "src/components/seo"
import { graphql } from "gatsby"

const Index = ({ data, pageContext }) => {
  const { numPages, currentPage } = pageContext

  return (
    <Layout>
      <SEO title="Gerard Clos - Homepage" />
      <Header />
      <Posts posts={data.allMarkdownRemark.edges} />
      <Nav numPages={numPages} currentPage={currentPage} />
      <Footer />
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export default Index

export const pageQuery = graphql`
 query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
