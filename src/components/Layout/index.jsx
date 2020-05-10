import PropTypes from 'prop-types'
import React from "react"
import githubLogo from '../../../content/assets/github_32px.png'
import twitterLogo from '../../../content/assets/twitter_32px.png'
import { Helmet } from 'react-helmet'

import './index.scss'
import styles from './index.module.scss'

const Layout = ({ children }) => {
  return (
    <main>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700;900&display=swap" rel="stylesheet" />
      </Helmet>
      {children}
      <footer className={styles.footer}>
        <div className={styles.link}>
          <a rel='noopener noreferrer' target='_blank' href='https://github.com/geclos'>
            <img src={githubLogo} />
          </a>
        </div>
        <div className={styles.link}>
          <a rel='noopener noreferrer' target='_blank' href='https://twitter.com/geclos'>
            <img src={twitterLogo} />
          </a>
        </div>
      </footer>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
