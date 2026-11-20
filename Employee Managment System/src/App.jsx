import './App.css'
import './othercomponents/Header.css'
import './othercomponents/TaskList.css'
import Login from './components/Auth/Login'
import { useEffect } from 'react'
import setLocalStorage from './utils/localstorage'

function App() {
  useEffect(() => {
    setLocalStorage()
  }, [])

  return (
    <>
      <Login />
    </>
  )
}

export default App