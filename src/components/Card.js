import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div style={{boxShadow:`1px 1px 5px 5px ${props.setColor}`}} onClick={props.cardHandler} className='card'>{props.children}</div>
  )
}

export default Card