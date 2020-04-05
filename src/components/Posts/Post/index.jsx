import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import styles from './index.module.scss'

const Post = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article className={styles.root} key={node.fields.slug}>
      <header>
        <h3 className={styles.link}>
          <Link className={styles.link} to={node.fields.slug}>
            {title}
          </Link>
        </h3>
        <small className={styles.date}>{node.frontmatter.date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
    </article>
  )
}

Post.propTypes = {
  node: PropTypes.object
}

export default Post
