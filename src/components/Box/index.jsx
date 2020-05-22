import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

function Box ({ children }) {
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}

Box.propTypes = {
  children: PropTypes.node
}

export default Box
