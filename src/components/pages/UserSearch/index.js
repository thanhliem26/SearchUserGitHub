import React from 'react'
import styled from './index.module.scss'
import clsx from 'clsx'
import { useState, useEffect, useRef } from 'react'
import Debounce from '../../../utils/createDebounce'
import UserList from './UserList/UserList'
import { getUserInfo } from '../../../services/GetUserInfo'
import Loading from './Loading/loading.gif'

const Index = () => {
  const [userName, setUserName] = useState('')
  const [page, setPage] = useState(1)
  const [userList, setUserList] = useState(undefined)
  const [total, setTotal] = useState(0)
  const removeUser = useRef()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getDataUser = async () => {
      if (userName !== '') {
        const res = await getUserInfo(userName, page)
        setLoading(false)
        setTotal(res.total_count)
        if (page === 1) {
          setUserList(res.items)
        } else {
          setUserList((prev) => [...prev, ...res.items])
        }
      }
    }
    getDataUser()
  }, [userName, page])

  useEffect(() => {
    setPage(1)
  }, [userName])

  useEffect(() => {
    const handleScroll = () => {
      let body = document.querySelector('body').clientHeight
      let scrollHeight = window.scrollY + window.innerHeight

      if (body <= Math.ceil(scrollHeight)) {
        setPage((prev) => prev + 1)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const onChange = (e) => {
    setLoading(true)
    setUserName(e.target.value)
  }
  const onChangeDebounce = Debounce(onChange, 500)

  const handleClearName = () => {
    setUserName('')
    removeUser.current.value = ''
  }

  return (
    <div className="grid">
      <div className={clsx('row', styled.searchUser)}>
        <div className={clsx('col l-12')}>
          <i className="fa-brands fa-github-alt"></i>
          <label>GitHub</label>
        </div>
      </div>
      <div className="grid wide">
        <div className="row">
          <div className={styled.UserInfo}>
            <div className={clsx('col l-12 m-12 c-10 c-o-1')}>
              <div className={clsx(styled.inputForm)}>
                <i
                  className={clsx(
                    'fa-solid fa-magnifying-glass',
                    styled.searchIcon,
                  )}
                ></i>
                <input
                  ref={removeUser}
                  type="text"
                  className={styled.inputSearch}
                  onChange={onChangeDebounce}
                />
                {userName.length > 0 ? (
                  <i
                    className={clsx('fa-solid fa-xmark', styled.removeIcon)}
                    onClick={handleClearName}
                  ></i>
                ) : (
                  ''
                )}
              </div>
              <h3>{total > 0 && `Total username is valid: ${total}`}</h3>
            </div>
            {loading ? (
              <img src={Loading} alt="loading" />
            ) : (
              userList && <UserList userlist={userList} total={total} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
