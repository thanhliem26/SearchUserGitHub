import { useEffect, useState } from 'react'
import style from './index.module.scss'
import { getLanguage } from '../../../../services/GetLanguage'
import { getReadMe } from '../../../../services/GetReadMe'
import ReadMe from '../ReadMe/index'
import randomColor from './randomColor'

const ReponItem = ({ data, user }) => {
  const { name, url, language, languages_url } = data
  const [percent, setPercent] = useState(0)
  const [animate, setAnimate] = useState('')
  const [openReadMe, setOpenReadMe] = useState(false)
  const [contentReadMe, setContentReadMe] = useState('')

  useEffect(() => {
    const getPercent = async () => {
      const res = await getLanguage(languages_url)
      let total = 0
      for (let key in res) {
        total += res[key]
      }

      setPercent(Math.round((res[language] / total) * 100))
    }
    getPercent()
  }, [language, languages_url])

  useEffect(() => {
    const styleSheet = document.styleSheets[0]
    const animationName = `animation${Math.round(Math.random() * 100)}`
    let keyframes = `@-webkit-keyframes ${animationName} {
        from { width: 0 }to {width: ${percent}%}
    }`

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
    setAnimate(animationName)
  }, [percent])

  const randomColors = randomColor(animate)

  const handleHidden = () => {
    let body = document.querySelector('body')
    body.style.overflow = 'auto'
    setOpenReadMe(false)
  }

  const handleOpenReadMe = async () => {
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'

    setOpenReadMe(true)
    await getReadMe(user, name)
      .then((respon) => {
        console.log('respon', respon)
        setContentReadMe(atob(respon.content))
      })
      .catch((err) => {
        setContentReadMe("We can't find README file from this repo!!!")
      })
  }

  return (
    <>
      {openReadMe && <ReadMe content={contentReadMe} onClick={handleHidden} />}
      <tr onClick={handleOpenReadMe}>
        <td>{name}</td>
        <td>{url}</td>
        <td>
          <span>{percent ? percent : 0} %</span>

          <div
            className={style.progress}
            style={{ backgroundColor: randomColors.color }}
          ></div>
          <div
            className={style.progress__percent}
            style={randomColors.styless}
          ></div>
        </td>
        <td>{language || 'No Language'}</td>
      </tr>
    </>
  )
}

export default ReponItem
