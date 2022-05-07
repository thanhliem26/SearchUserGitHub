import '../styles/App.css'
import UserInfo from '../components/pages/UserInfo/index'
import UserDetails from '../components/pages/UserDetail/index'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserInfo />} />
        <Route path="/userDetail/:name" element={<UserDetails />} />
      </Routes>
    </div>
  )
}

export default App
