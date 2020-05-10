import PropTypes from 'prop-types'
import React from "react"
import { Helmet } from 'react-helmet'

import './index.scss'

const Layout = ({ children }) => {
  return (
    <main>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700;900&display=swap" rel="stylesheet" />
      </Helmet>
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
