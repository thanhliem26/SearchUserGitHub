import debounce from 'lodash/debounce'

const Debounced = (func, delay) => {
  return debounce(func, delay)
}

export default Debounced
