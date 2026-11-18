import Header from '../../othercomponents/Header'
import TaskListnumber from '../../othercomponents/TaskListnumber'
import Task from '../TaskList/Task'

function EmployeeDashboard() {
  return (
    <div>
        <Header/>
        <TaskListnumber/>
        <Task/>
    </div>
  )
}

export default EmployeeDashboard