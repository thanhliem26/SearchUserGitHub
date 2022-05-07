import React from 'react'
import RepoItem from './RepoItem'
import RepoEmpty from './RepoEmpty'

const Index = ({ dataList, user }) => {
  return (
    <div className="row">
      {dataList.length > 0 ? (
        dataList.map((item, index) => (
          <RepoItem key={index} data={item} user={user} />
        ))
      ) : (
        <RepoEmpty />
      )}
    </div>
  )
}

export default Index
