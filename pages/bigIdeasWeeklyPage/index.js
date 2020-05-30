const path = require(`path`)

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/big_ideas_weekly/" } }
          limit: 1000
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) throw result.errors

  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 100
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach(() => {
    createPage({
      path: `/biw`,
      component: path.resolve("./src/templates/BigIdeasWeekly/index.js"),
      context: { limit: postsPerPage }
    })
  })
}
