import React from 'react'
import styled from './index.module.scss'

const RepoEmpty = () => {
  return (
    <div className="col l-6 l-o-3">
      <div className={styled.reponEmpty}>
        <h1>User's repo is Empty!</h1>
      </div>
    </div>
  )
}

export default RepoEmpty
