import React, { PropTypes } from 'react'
import Words from "./Words"


const Posts = ({data}) => (
  <ul>
    {console.log('the data:',data)}
    {Object.keys(data).map((state, i) =>
      <div>
        <li key={i}>{state}</li>
          <Words words={data[state]} />
      </div>
    )}
  </ul>
)

Posts.propTypes = {
  data: PropTypes.object.isRequired
}

export default Posts
