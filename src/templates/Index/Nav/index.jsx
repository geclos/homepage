import PropTypes from 'prop-types'
import React from 'react'
import { Link } from "gatsby"

import styles from './index.module.scss'

function Nav ({ currentPage, numPages }) {
  const prevPage = currentPage - 1

  if (!prevPage) return null

  return (
    <nav className={styles.nav}>
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {currentPage < numPages && (
            <Link to={`pages/${currentPage + 1}`} rel="next">
              ← Older posts
            </Link>
          )}
        </li>
        <li>
          {currentPage > 1 && (
            <Link to={prevPage > 1 ? `pages/${prevPage}` : '/'} rel="prev">
              Newer posts →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  currentPage: PropTypes.number,
  numPages: PropTypes.number
}

export default Nav
