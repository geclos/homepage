const { createFilePath } = require(`gatsby-source-filesystem`)
const { indexPage, blogPostPage, aboutPage, newsletterPage } = require('./pages')

exports.createPages = async (args) => {
  aboutPage(args)
  blogPostPage(args)
  indexPage(args)
  newsletterPage(args)
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
