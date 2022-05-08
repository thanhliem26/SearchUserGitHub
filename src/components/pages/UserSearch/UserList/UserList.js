import React from 'react'
import PropTypes from 'prop-types'
import UserInfo from './UserInfo'
import styled from './index.module.scss'
import clsx from 'clsx'
import NotFound from './NotFound'

const UserList = ({ userlist, total }) => {
  return (
    <div className={clsx(styled.backGroundListUser, 'row')}>
      {userlist.length ? (
        userlist.map((item, index) => <UserInfo user={item} key={index} />)
      ) : (
        <NotFound />
      )}
      {userlist.length === total && userlist.length !== 0 ? (
        <h1 style={{ width: '100%', padding: 50, color: 'white' }}>
          No Other User
        </h1>
      ) : (
        ''
      )}
    </div>
  )
}

UserList.propTypes = {
  userlist: PropTypes.array,
}
export default UserList
