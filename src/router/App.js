import '../styles/App.css'
import UserSearch from '../components/pages/UserSearch/index'
// import UserDetails from '../components/pages/UserDetail/index'
import UserRepo from '../components/pages/UserRepo/index'
import { Routes, Route } from 'react-router-dom'
import NotFound from '../components/pages/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserSearch />} />
        <Route path="/userDetail/:name" element={<UserRepo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
