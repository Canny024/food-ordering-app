import React from 'react'
import classes from "./Modal.module.css"

const Backdrop= props =>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay= props =>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

export default function Modal(props) {
  return (
    <>
      <Backdrop onClose={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  )
}
