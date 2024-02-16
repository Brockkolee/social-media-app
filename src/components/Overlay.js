import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import './Overlay.css'

const Backdrop = props => {

  return (<div className="backdrop" 
  onClick={props.onPopupHandler}/>)
}
const ModalOverlay = props => {
  return <div className="modal">
    <div className="content">{props.children}</div>
  </div>
}

const portalElement = document.getElementById('overlay')

const Overlay = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onPopupHandler={props.onPopupHandler}/>,portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
  )
}

export default Overlay