const path = require(`path`)

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/big_ideas_weekly/" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) throw result.errors

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post) => {
    createPage({
      path: `/biw${post.node.fields.slug}`,
      component: path.resolve(`./src/templates/BigIdeasWeeklyPost/index.js`),
      context: { slug: post.node.fields.slug }
    })
  })
}
