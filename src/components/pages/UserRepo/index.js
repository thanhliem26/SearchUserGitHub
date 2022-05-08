import { useState, useEffect } from 'react'
import { getUserRepo } from '../../../services/GetUserInfo'
import { useParams } from 'react-router-dom'
import styled from './index.module.scss'
import clsx from 'clsx'
import UserRepoList from './UserRepoList/index'
import { Link } from 'react-router-dom'

const Index = () => {
  const [repoList, setRepoList] = useState([])
  const params = useParams()

  useEffect(() => {
    const getRepoList = async () => {
      let res = await getUserRepo(params.name)
      setRepoList(res)
    }
    getRepoList()
  }, [params.name])

  return (
    <div className="grid wide">
      <div className={styled.UserRepo}>
        <div className="row">
          <div className={clsx('col l-12 m-12 c-10 c-o-1', styled.formGroup)}>
            <div className={styled.formButton}>
              <Link to="/">
                <button>
                  <i className="fa-solid fa-angles-left"></i>Back
                </button>
              </Link>
            </div>
          </div>
          <div className={clsx('col l-12 m-12 c-10 c-o-1', styled.formGroup)}>
            <h1>Repo List</h1>
            <p>{repoList.length} repositories of the first 30 reppositories</p>
          </div>
        </div>
      </div>
      {repoList && <UserRepoList dataList={repoList} user={params.name} />}
    </div>
  )
}

export default Index
