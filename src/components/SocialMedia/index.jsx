import React from 'react'
import twitterLogo from '../../../content/assets/twitter_32px.png'

import styles from './index.module.scss'

const SocialMedia = () => {
  return (
    <>
      <div className={styles.link}>
        <a rel='noopener noreferrer' target='_blank' href='https://twitter.com/geclos'>
          <img src={twitterLogo} />
        </a>
      </div>
    </>
  )
}

export default SocialMedia
