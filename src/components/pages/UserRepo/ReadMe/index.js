import styled from './index.module.scss'
import { useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import PropTypes from 'prop-types'
import CreatePortal from '../../../common/Modal/createPortal'

const Index = ({ content, onClick }) => {
  const modal = useRef()
  const remove = useRef()

  useEffect(() => {
    let modalPortal = modal.current
    let removePortal = remove.current

    const handleEvent = (e) => {
      e.stopPropagation()
    }

    const handleRemove = () => {
      onClick()
    }

    setTimeout(() => {
      modalPortal = modal.current
      removePortal = remove.current
      modalPortal.addEventListener('click', handleEvent)
      removePortal.addEventListener('click', handleRemove)
    }, 1000)

    return () => {
      if (modalPortal && removePortal) {
        modalPortal.removeEventListener('click', handleEvent)
        removePortal.removeEventListener('click', handleRemove)
      }
    }
  }, [onClick])

  return (
    <CreatePortal wrapperId="createPortal">
      <div className={styled.modalDialog} onClick={onClick}>
        <div className="grid wide" ref={modal}>
          <div className="row">
            <div className={styled.openModal}>
              <div className={styled.headerReadME}>
                <h1>README</h1>

                <i
                  className="fa-solid fa-xmark"
                  onClick={onClick}
                  ref={remove}
                ></i>
              </div>
              <div className={styled.bodyReadME}>
                <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CreatePortal>
  )
}

Index.prototype = {
  content: PropTypes.string,
}

export default Index
