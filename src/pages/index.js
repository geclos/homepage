import Bio from '../components/Bio'
import Layout from "../components/Layout"
import PropTypes from 'prop-types'
import React from "react"
import SEO from "../components/seo"

const BlogIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Gerard Clos - Personal Page" />
      <Bio />
    </Layout>
  )
}

BlogIndex.propTypes = {
  location: PropTypes.object
}

export default BlogIndex
