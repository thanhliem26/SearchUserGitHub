import { useState } from 'react'
import styled from './index.module.scss'
import clsx from 'clsx'
import ReadMe from '../ReadMe/index'
import { getReadMe } from '../../../../services/GetReadMe'

const RepoItem = ({ data, user }) => {
  const { name, open_issues, forks, watchers, language } = data
  const [openReadMe, setOpenReadMe] = useState(false)
  const [contentReadMe, setContentReadMe] = useState('')

  const handleHidden = () => {
    let body = document.querySelector('body')
    body.style.overflow = 'auto'
    setOpenReadMe(false)
  }

  const handleOpenReadMe = async () => {
    let body = document.querySelector('body')
    body.style.overflow = 'hidden'

    setOpenReadMe(true)
    await getReadMe(user, name)
      .then((respon) => {
        setContentReadMe(atob(respon.data.content))
      })
      .catch((err) => {
        setContentReadMe("We can't find README file from this repo!!!")
      })
  }
  return (
    <div className={clsx(styled.formGroup, 'col l-4 m-6 c-12')}>
      {openReadMe && <ReadMe content={contentReadMe} onClick={handleHidden} />}
      <div className={styled.formContent} onClick={handleOpenReadMe}>
        <div className={styled.titleMain}>
          <h2>{name}</h2>
        </div>
        <div className={clsx(styled.listRule)}>
          <div className={clsx(styled.itemRule, 'row')}>
            <div className={clsx('col l-5', styled.text)}>
              <span>Open issues</span>
            </div>
            <div className="col l-7">
              <span>{open_issues}</span>
            </div>
          </div>
          <div className={clsx(styled.itemRule, 'row')}>
            <div className={clsx('col l-5', styled.text)}>
              <span>Fork</span>
            </div>
            <div className="col l-7">
              <span>{forks}</span>
            </div>
          </div>
          <div className={clsx(styled.itemRule, 'row')}>
            <div className={clsx('col l-5', styled.text)}>
              <span>Watchers</span>
            </div>
            <div className="col l-7">
              <span>{watchers}</span>
            </div>
          </div>
          <div className={clsx(styled.itemRule, 'row')}>
            <div className={clsx('col l-5', styled.text)}>
              <span>Language</span>
            </div>
            <div className="col l-7">
              {language && <span className={styled.language}>{language}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepoItem
