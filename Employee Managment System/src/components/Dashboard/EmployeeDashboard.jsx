import './EmployeeDashboard.css'
import Header from '../../othercomponents/Header'
import TaskListnumber from '../../othercomponents/TaskListnumber'
import Task from '../TaskList/Task'

function EmployeeDashboard() {
  return (
    <div className="employee-dashboard">
      <Header />
      <main className="employee-dashboard-content">
        <TaskListnumber />
        <Task />
      </main>
    </div>
  )
}

export default EmployeeDashboard