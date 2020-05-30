const { createFilePath } = require(`gatsby-source-filesystem`)
const pages = require('./pages')

exports.createPages = (args) => {
  return Promise.all(pages.map(p => p(args)))
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
