const path = require(`path`)

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fields: { slug: { ne: "/bio/" }}}
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
  const postsPerPage = 2
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/pages/${i + 1}`,
      component: path.resolve("./src/templates/Index/index.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
