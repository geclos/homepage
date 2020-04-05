import Post from './Post'
import PropTypes from 'prop-types'
import React from 'react'

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map(({ node }) => <Post key={node.id} node={node} />)}
    </>
  )
}

Posts.propTypes = {
  posts: PropTypes.array
}

export default Posts
