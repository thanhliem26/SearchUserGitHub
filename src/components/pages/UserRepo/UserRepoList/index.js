import React from 'react'
import RepoEmpty from './RepoEmpty'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import styled from './index.module.scss'
import RepoItem from './ReponItem'

const Index = ({ dataList, user }) => {
  return (
    <>
      {dataList.length > 0 ? (
        <div className="row">
          <div className={clsx(styled.repoList, 'col l-12 m-12 c-12')}>
            <table>
              <thead className={styled.thead}>
                <tr>
                  <th>PROJECT</th>
                  <th>URL</th>
                  <th>PROGRESS</th>
                  <th>MAIN LANGUAGE</th>
                </tr>
              </thead>
              <tbody className={styled.tbody}>
                {dataList.map((item, index) => (
                  <RepoItem key={index} data={item} user={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <RepoEmpty />
      )}
    </>
  )
}

Index.propTypes = {
  dataList: PropTypes.array,
  user: PropTypes.string,
}

export default Index
