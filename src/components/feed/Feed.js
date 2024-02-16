import React from 'react'
import './Feed.css'

const Feed = (props) => {
  return (
    <div className='feed'>{props.children}</div>
  )
}

export default Feed