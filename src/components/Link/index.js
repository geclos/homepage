// @flow
import * as React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

function LinkComponent ({ to, style = {}, children }) {
  return (
    <Link style={style} className={styles.root} to={to}>
      {children}
    </Link>
  )
}

LinkComponent.propTypes = {
  to: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default LinkComponent
