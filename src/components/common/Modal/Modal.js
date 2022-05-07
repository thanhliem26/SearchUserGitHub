import ReactDOM from 'react-dom'
import { Fragment } from 'react'

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <Fragment>{children}</Fragment>,
    document.querySelector('#portal'),
  )
}

export default Modal
