import PropTypes from 'prop-types'
import React from "react"

import styles from './index.module.scss'

export default function Post ({ post }) {
  return (
    <article className={styles.article}>
      <header>
        <h1 className={styles.title}>
          {post.frontmatter.title}
        </h1>
        <p className={styles.date}>
          {post.frontmatter.date}
        </p>
      </header>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}

Post.propTypes = {
  post: PropTypes.object
}


