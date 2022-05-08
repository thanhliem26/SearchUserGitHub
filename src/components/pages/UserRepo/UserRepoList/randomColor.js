const randomColor = (name) => {
  const getRandomColor = () => {
    let letter = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
      color += letter[Math.floor(Math.random() * 16)]
    }
    return color
  }

  const color = getRandomColor()

  const styless = {
    backgroundColor: color,
    animationName: name,
    animationTimingFunction: 'ease-in-out',
    animationDuration: '3s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'forwards',
  }
  return {
    color,
    styless,
  }
}

export default randomColor
