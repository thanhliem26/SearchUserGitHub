import React from 'react'
import PropTypes from 'prop-types'
import styled from './index.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

const UserInfo = ({ user }) => {
  let { login, avatar_url } = user
  return (
    <div className={clsx(styled.formGroup, 'col l-4 m-6 c-12')}>
      <div className={styled.formContent}>
        <div className={styled.FormImage}>
          <img src={avatar_url} alt="userImage" className={styled.imageUser} />
        </div>
        <h4 className={styled.textUser}>{login}</h4>
        <button className={styled.buttonDetail}>
          <Link to={`/userDetail/${login}`}>MORE</Link>
        </button>
      </div>
    </div>
  )
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
  }),
}

export default UserInfo
