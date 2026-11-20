import './App.css'
import './othercomponents/Header.css'
import './othercomponents/TaskList.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'

function App() {
  return (
    <>
      <AdminDashboard />
      {/* <Login /> */}
      {/* <EmployeeDashboard/> */}
    </>
  )
}

export default App