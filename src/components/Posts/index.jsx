import PostComponent from './Post'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './index.module.scss'

const Posts = ({ posts, Post}) => {
  return (
    <div>
      {posts.map(({ node }, i) => (
        <div key={i} className={styles.root}>
          {Post ? <Post node={node} /> : <PostComponent node={node} />}
        </div>
      ))}
    </div>
  )
}

Posts.propTypes = {
  posts: PropTypes.array,
  Post: PropTypes.Node
}

export default Posts
