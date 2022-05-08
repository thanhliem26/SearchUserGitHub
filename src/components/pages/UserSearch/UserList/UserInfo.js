import React from 'react'
import PropTypes from 'prop-types'
import styled from './index.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

const UserInfo = ({ user }) => {
  const {
    login,
    avatar_url,
    id,
    type,
    html_url,
    repos_url,
    subscriptions_url,
  } = user
  return (
    <div className={clsx(styled.formGroup, 'col l-4 m-6 c-12')}>
      <div className={styled.formContent}>
        <div className={styled.headerContent}>
          <div className={styled.imageMain}>
            <img src={avatar_url} alt="userImage" />
          </div>
          <div className={styled.userName}>
            <h3>{login}</h3>
            <div className={styled.userType}>
              <h5>ID: {id}</h5>
              <h5>TYPE: {type}</h5>
            </div>
          </div>
          <Link to={`/userDetail/${login}`}>
            <button className={styled.buttonDetail}>MORE</button>
          </Link>
        </div>
        <div className={styled.bodyContent}>
          <div className="row">
            <div className={clsx(styled.redirect, 'col l-4 m-4 c-4')}>
              <a href={html_url} target="_blank" rel="noopener noreferrer">
                <div className={styled.userLink}>
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <span>GitHub</span>
            </div>
            <div className={clsx(styled.redirect, 'col l-4 m-4 c-4')}>
              <a href={repos_url} target="_blank" rel="noopener noreferrer">
                <div className={clsx(styled.userLink, styled.repo)}>
                  <i className="fa-solid fa-reply"></i>
                </div>
              </a>
              <span>Respon</span>
            </div>
            <div className={clsx(styled.redirect, 'col l-4 m-4 c-4')}>
              <a
                href={subscriptions_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={clsx(styled.userLink, styled.subcrip)}>
                  <i className="fa-solid fa-mountain-sun"></i>
                </div>
              </a>
              <span>subscription</span>
            </div>
          </div>
        </div>
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
