import React, { PropTypes } from 'react'

const Posts = ({posts}) => (
  <ul>
    {console.log('the posts:',posts)}
    {posts.map((post, i) =>
      <li key={i}>{post}</li>
    )}
  </ul>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
