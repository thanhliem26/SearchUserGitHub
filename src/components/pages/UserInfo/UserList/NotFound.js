import React from 'react'
import styled from './index.module.scss'
import clsx from 'clsx'

const NotFound = () => {
  return (
    <div className={clsx(styled.formGroup, 'col l-4 l-o-4 m-6 m-o-3 c-12')}>
      <div className={styled.formContent}>
        <h1>Oops !!!</h1>
        <p>We Counldn't Find The You Were Looking For. Try Again</p>
      </div>
    </div>
  )
}

export default NotFound
