import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    allMarkdownRemark(filter: {
      fields:{slug:{eq: "/bio/"}}
    }) {
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

export default function Bio () {
  const data = useStaticQuery(query)
  const html = data.allMarkdownRemark.edges[0].node.html

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

