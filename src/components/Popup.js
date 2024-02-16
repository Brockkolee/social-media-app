import React from 'react'
import Overlay from   './Overlay'

const Popup = (props) => {
  return (
    <Overlay 
    onPopupHandler={props.onPopupHandler}
    onPopupHandler2={props.onPopupHandler2}
    > 
      {props.children}
      </Overlay>
  )
}

export default Popup