import './NotFound.scss'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="NotFound">
      <div className="grid">
        <div className="row">
          <div className="NotFound__content col l-6 m-11 c-11">
            <div className="NotFound__content-main">
              <h1>Oops!</h1>
            </div>
            <div className="NotFound__content-title">
              <h2>404 Error - Page Not Found</h2>
              <p>
                The URL of this content has been changed or no longer exists. If
                you are saving this URL, try accessing it again from the
                homepage instead of using the saved URL.
              </p>
              <Link to="/">
                <button>Go to Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
