import React, { PropTypes } from 'react'

const Words = ({words}) => (
  <ul>
    {console.log('the words:',words)}
    {words.map((word, i) =>
      <li key={i}>{word.symbol}</li>
    )}
  </ul>
)

Words.propTypes = {
  words: PropTypes.array.isRequired
}

export default Words
