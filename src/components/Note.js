// src/components/Note.js

import React from 'react'

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
}
// use _id - mongoose unique key
export default ({
  note: { _id, title, category, body, timestamp },
  onDelete
}) => {
  return (
    <div style={styles}>
      <h4>{title}</h4>
      <h6>{category}</h6>
      <p>{body}</p>
      <p>{timestamp}</p>
      <button
        className='btn btn-danger'
        type='button'
        onClick={() => onDelete(_id)}
      >
        Remove
      </button>
    </div>
  )
}
