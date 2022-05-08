import { useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

function ReactPortal({ children, wrapperId }) {
  const [wrapperElement, setWrapperElement] = useState(null)

  function createWrapperAndAppendToBody(wrapperId) {
    const wrapperElement = document.createElement('div')
    wrapperElement.setAttribute('id', wrapperId)
    document.body.appendChild(wrapperElement)
    return wrapperElement
  }

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let systemCreated = false
    if (!element) {
      systemCreated = true
      element = createWrapperAndAppendToBody(wrapperId)
    }
    setWrapperElement(element)
    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])
  if (wrapperElement === null) {
    return null
  }
  return createPortal(children, wrapperElement)
}
export default ReactPortal
