// @flow
import * as React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

function LinkComponent ({ href, to, style = {}, children }) {
  if (href) {
    return (
      <Link style={style} className={styles.root} href={href}>
        {children}
      </Link>
    )
  }

  return (
    <Link style={style} className={styles.root} to={to}>
      {children}
    </Link>
  )
}

LinkComponent.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default LinkComponent
