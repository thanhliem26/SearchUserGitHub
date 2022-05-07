import { useState, useEffect, useRef } from 'react'
import styled from './index.module.scss'
import Debounce from '../../../utils/Debounce'
import { getUserInfo } from '../../../services/GetUserInfo'
import UserList from './UserList/UserList'
import clsx from 'clsx'
import Logo from './image/logo.png'

const Index = () => {
  const [userName, setUserName] = useState('')
  const [page, setPage] = useState(1)
  const [listUser, setListUser] = useState(undefined)
  const [total, setTotal] = useState(0)
  const removeUser = useRef()

  const onChange = (e) => {
    setUserName(e.target.value)
  }
  const onChangeDebounce = Debounce(onChange, 500)

  const handleClearName = () => {
    setUserName('')
    removeUser.current.value = ''
  }

  useEffect(() => {
    const DataUser = async () => {
      if (userName !== '') {
        let res = await getUserInfo(userName, page)
        setTotal(res.data.total_count)
        if (page === 1) {
          setListUser(res.data.items)
        } else {
          setListUser((prev) => [...prev.concat(res.data.items)])
        }
      }
    }
    DataUser()
  }, [userName, page])

  useEffect(() => {
    setPage(1)
  }, [userName])

  useEffect(() => {
    const handleScroll = () => {
      let body = document.querySelector('body').clientHeight
      let scrollHeight = window.scrollY + window.innerHeight

      if (body <= scrollHeight) {
        setPage((prev) => prev + 1)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="grid wide">
      <div className="row">
        <div className={styled.UserInfo}>
          <div className={clsx(styled.searchUser, 'col l-12 m-12 c-10 c-o-1')}>
            <img src={Logo} alt="logoMain" className={styled.logo} />
            <div className={clsx(styled.inputForm)}>
              <input
                ref={removeUser}
                type="text"
                className={styled.inputSearch}
                onChange={onChangeDebounce}
              />
              {userName.length > 0 ? (
                <i className="fa-solid fa-xmark" onClick={handleClearName}></i>
              ) : (
                ''
              )}
            </div>
          </div>
          {listUser && <UserList userlist={listUser} total={total} />}
        </div>
      </div>
    </div>
  )
}

export default Index
