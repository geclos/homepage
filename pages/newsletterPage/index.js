const path = require(`path`)

module.exports = async ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: '/newsletter',
    component: path.resolve("./src/templates/Newsletter/index.js")
  })
}
