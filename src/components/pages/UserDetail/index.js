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
      setRepoList(res.data)
    }
    getRepoList()
  }, [params.name])

  return (
    <div className="grid wide">
      <div className={styled.UserRepo}>
        <div className="row">
          <div className={clsx('col l-12', styled.formGroup)}>
            <div className={styled.formButton}>
              <button>
                <Link to="/">
                  <i className="fa-solid fa-angles-left"></i>Back
                </Link>
              </button>
            </div>
          </div>
          <div className={clsx('col l-12', styled.formGroup)}>
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
