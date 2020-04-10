import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const Sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

const Separator = ({ size = Sizes.large }) =>
  <div className={`${styles.separator} ${styles[size]}`} />

Separator.propTypes = {
  size: PropTypes.string
}

export default Separator
