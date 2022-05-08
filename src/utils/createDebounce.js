import { useRef } from 'react'

const Debounce = (func, delay) => {
  const timerID = useRef(null)
  return (...args) => {
    if (timerID.current) {
      clearTimeout(timerID.current)
    }
    timerID.current = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

export default Debounce
