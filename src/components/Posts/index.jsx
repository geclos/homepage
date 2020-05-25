import Post from './Post'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './index.module.scss'

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map(({ node }, i) => (
        <div key={i} className={styles.root}>
          <Post node={node} />
        </div>
      ))}
    </div>
  )
}

Posts.propTypes = {
  posts: PropTypes.array
}

export default Posts
