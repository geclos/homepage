import PropTypes from 'prop-types'
import React from "react"

import './index.scss'

const Layout = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
