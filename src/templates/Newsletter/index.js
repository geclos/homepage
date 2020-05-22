import Header from 'src/components/Header'
import Layout from 'src/components/Layout'
import Newsletter from 'src/components/Newsletter'
import React from "react"
import SEO from 'src/components/seo'

const NewslettePage = () => {
  return (
    <Layout>
      <SEO title="Gerard Clos - Homepage" />
      <Header home />
      <Newsletter />
    </Layout>
  )
}

export default NewslettePage
