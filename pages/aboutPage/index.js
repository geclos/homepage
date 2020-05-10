const path = require(`path`)

module.exports = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: '/about',
    component: path.resolve("./src/components/About/index.jsx")
  })
}
