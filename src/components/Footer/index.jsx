import Bio from '../Bio'
import React from 'react'

import styles from './index.module.scss'

const Footer = () => {
  return (
    <div>
      <div className={styles.separator} />
      <Bio />
    </div>
  )
}

export default Footer
